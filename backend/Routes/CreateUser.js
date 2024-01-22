const express = require('express');
const router = require('express').Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//evnironment variable
require('dotenv').config();
const jwtSecret=process.env.JWT_SECRET;
router.post("/CreateUser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const salt=await bcrypt.genSalt(1 );
        const hashedPassword=await bcrypt.hash(req.body.password,salt);
        try {
            await User.create(
                {
                    name: req.body.name,
                    location: req.body.location,
                    email: req.body.email,
                    password: hashedPassword,
                }
            )
            res.status(200).json({ success: true });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
    })

router.post("/loginuser", [
    body('email').isEmail(),
    body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        let email = req.body.email;
        let password = req.body.password;
        try {
            let userData = await User.findOne({email:email });
            console.log(userData.password,password)
            if (!userData) {
                return res.status(400).json({ msg: "Invalid Credentials" });
            }
            const pwdCompare=await bcrypt.compare(password,userData.password);
            if (!pwdCompare) {
                return res.status(400).json({ msg: "Invalid Credentials" });
            }
            const data={
                user:{
                    id:userData.id
                }
            }
            const authToker=jwt.sign(data,jwtSecret);
            return res.json({
                success:true,
                authToken:authToker
            });

        }
        catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
    })
module.exports = router;