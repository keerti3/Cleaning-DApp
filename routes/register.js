const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();

router.use(express.urlencoded({ extended: true }));

router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', async(req, res) => {
    // if all good, store in db
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const uname = req.body.uname;
    const pwd = req.body.pwd;
    const confirmpwd = req.body.confirmpwd;

    if (pwd != confirmpwd) {
        console.log("password and confirm password do not match. try again");
        //res.redirect('/register')
    } else {
        mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }).then(() => {
            console.log("connected to db");
        });

        const newUser = new User({
            firstname: req.body.fname,
            lastname: req.body.lname,
            email: req.body.email,
            mobile: req.body.mobile,
            username: req.body.uname,
            password: req.body.pwd
        });

        try {
            await newUser.save().then(() => {
                console.log("new user registered");
                res.redirect('/creator-login');
            });
        } catch (err) {
            console.log("registration failed");
            res.redirect('/')
        }
    }
});

module.exports = router;