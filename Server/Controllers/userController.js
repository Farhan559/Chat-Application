const express = require('express');
const UserModel = require("../Models/userModel")
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../Config/generateToken');

// Login
const loginController = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;

  try {
    const user = await UserModel.findOne({ name });

    console.log('Fetch user data', user);

    if (user && (await user.matchPassword(password))) {
      const response = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      };

      console.log(response);
      res.json(response);
    } else {
      res.status(401).send('Invalid userName and Password');
    }
  } catch (error) {
    console.error('Error in loginController:', error);
    res.status(500).send('Internal Server Error');
  }
});


    // Register
const registerController = expressAsyncHandler(async (req,res)=>{

    const {name,email,password} = req.body;

    // check for all fields
    if(!name || !email || !password){
        // res.send(400);
        res.sendStatus(400);

        throw Error("All input fields are not filled");
        // return res.status(400).json({ message: 'All input fields are not filled' });
    }
    // Pre-exsisting user

    const userExist = await UserModel.findOne({email});
    if(userExist)
    {
        throw new Error("User already exist");
        // return res.status(400).json({ message: 'User already exists' });
    }

    // Username already taken.

    const userNameExist = await UserModel.findOne({name});
    if(userNameExist)
    {
        throw new Error("UserName already exist");
        // return res.status(400).json({ message: 'Username already exists' });
    }

    //Create the entry in DB
    const user = await UserModel.create ({ name , email , password});
    if (user) {
        return res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
        }).end(); // or use res.json(...) directly without res.send()
      } else {
        return res.status(400).json({ message: 'Registration Error' });
      }
      });
      const fetchAllUsersController = expressAsyncHandler(async (req,res)=>{
        const keyword = req.query.search
        ? {
            $or : [
                {name: {$regex: req.query.search,$options: "i"}},
                {email: {$regex: req.query.search,$options: "i"}},
            ],
        }
        :{};
        const users = await UserModel.find(keyword).find({
            _id: {$ne: req.user._id},

        });
        res.send(users);
    })

module.exports = {loginController , registerController ,fetchAllUsersController};