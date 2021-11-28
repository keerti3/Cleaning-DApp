const Model = require('../models/3dmodel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
router.use(express.json())

router.get('/api/list',(req,res)=>{
    async function getModels(){
        const models = await Model.find();//.select({name: 1, desc: 1, creator: 1})
        res.send(models);
    }
    getModels();
    
})

module.exports = router;