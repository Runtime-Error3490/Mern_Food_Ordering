const express = require('express');
const router = require('express').Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
router.post("/CreateUser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Incorrect Password").isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            await User.create(
                {
                    name: req.body.name,
                    location: req.body.location,
                    email: req.body.email,
                    password: req.body.password,
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
            if (password === userData.password) {
                return res.status(200).json({ success: true });
            }
            else {
                return res.status(400).json({ msg: "Invalid Credentials" });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ success: false });
        }
    })
module.exports = router;