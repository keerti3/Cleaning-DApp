const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = require('express').Router();
const dotenv = require('dotenv');

dotenv.config();

router.use(express.urlencoded({ extended: true }));

router.get('/creator-login', (req, res) => {
    res.render('creator-login.ejs');
});

router.post('/creator-login', async(req, res) => {
    // fetch user details from db
    //const email = req.body.email;
    const uname = req.body.uname;
    const pwd = req.body.pwd;

    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }).then(() => {
        console.log("connected to db");
    });

    try {
        const user = await User.findOne({ username: req.body.uname, password: req.body.pwd });
        console.log(user);
        if (user != null) {
            console.log("login sucess");
            // redirect to upload form
            res.render('upload');
        } else {
            console.log("user not registered or invalid credentials");
            res.redirect('/creator-login');
        }
    } catch (err) {
        console.log("error");
        res.redirect('/')
    }

});

module.exports = router;