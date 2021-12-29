const express = require('express');
const router = express.Router();
router.use('/uploads', express.static('uploads'));
router.get('/api/model/:name/:creator', (req, res) => {
    async function getJson() {
        const jsonmodel = { name: req.params.name, creator: req.params.creator };
        //const jsonmodel = await model.find().select({ name: 1, creator: 1 });
        res.send(JSON.stringify(jsonmodel));
        return jsonmodel;
    }
    //const jsonmodel = getJson();
});

module.exports = router;