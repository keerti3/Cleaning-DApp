const model = require('../models/3dmodel');
const express = require('express');
const router = express.Router();
router.use('/uploads', express.static('uploads'));
router.get('/api/list',(req,res)=>{
    async function getModels(){
       
        const jsonmodel= await model.find(); 
        //.select({name: 1, desc: 1, creator: 1}); 
        res.send(JSON.stringify(jsonmodel));
    }
    getModels();
    
})

module.exports = router;