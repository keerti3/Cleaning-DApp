const router = require('express').Router();
const Model = require('../models/3dmodel');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
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
        /* var filetypes = /glb/;
         var extname = filetypes.test(path.extname(
             file.originalname).toLowerCase());
             if (extname) {
                 return cb(null, true);
             }
             return cb(JSON.stringify({ "success": false, "message": "invalid file type" }), false);

         */
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

router.get('/', (req, res) => {
    res.render('upload');
});


router.post('/', upload.single('model'), (req, res, next) => {
    // dont add data to db if file type is not .glb
    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        creator: req.body.creator,
        location: 'http://3.7.222.30:5000/uploads/' + req.body.name + '.glb',
    }
    Model.create(obj, (err, item) => {
        res.redirect('/');
    });
});

module.exports = router;