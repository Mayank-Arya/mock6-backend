const express = require('express')
const {userModel} = require('../models/user')
const userRouter = express.Router()

userRouter.post("/",async(req,res)=>{
    try{
  const {name,email} = req.body
  const isUserPresent = await userModel.findOne({email})
  if(isUserPresent) return res.send({msg:"User Already Present, Please Login"})
  const newUser = new userModel({name,email})
  await newUser.save()
  res.status(200).send({msg:"New User Has Been Registered"})
    }
    catch(err){
  res.status(400).send({msg:err.message})
    }
})


module.exports = {userRouter}

