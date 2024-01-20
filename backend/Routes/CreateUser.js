const express = require('express');
const router=require('express').Router();
const User=require('../models/User');
const {body,validationResult}=require('express-validator');
router.post("/CreateUser",[
body('email').isEmail(),
body('name').isLength({min:5}),
body('password',"Incorrect Password").isLength({min:5})],
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    try{
        await User.create(
            {
                name:req.body.name,
                location:req.body.location,
                email:req.body.email,
                password:req.body.password,
            }
        )
        res.status(200).json({message:"User Created"});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
})
module.exports=router;