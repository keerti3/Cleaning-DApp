const router = require('express').Router();
const Model = require('../models/3dmodel');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const Connect = require('../connect');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        var filetypes = /glb/;

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (extname) {
            return cb(null, true);
        }

        cb("Error: File upload only supports the " +
            "following filetypes - " + filetypes);
    },
    limits: { fileSize: 2500 * 1024 * 1024 },
});

router.get('/creator-login/upload', (req, res) => {
    res.render('upload');
});

router.post('/creator-login/upload', upload.single('model'), (req, res, next) => {
    // dont add data to db if file type is not .glb
    const name1 = req.body.name;
    const creator1 = req.body.creator;
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        creator: req.body.creator,
        location: 'http://3.7.222.30:5000/uploads/' + req.body.name + '.glb',
    }
    Model.create(obj, (err, item) => {
        //res.redirect('/');
        console.log(name1);
        //load();
        //Connect.addModel(name, creator);
        //res.redirect('http://3.7.222.30:5000/api/model/:name/:creator');
        //const modelInfo = { name: name1, creator: creator1 };
        // router.post('/api/model/', { name: name1, creator: creator1 });
        //res.send(JSON.stringify(modelInfo));
        console.log(JSON.stringify(modelInfo));
        //const jsonmodel = { name: req.body.name, creator: req.body.creator };
        //res.send(JSON.stringify(jsonmodel));

    });
});

module.exports = router;