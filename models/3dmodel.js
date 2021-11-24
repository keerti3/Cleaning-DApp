const mongoose = require('mongoose');
  
const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    creator: String,
});
  
module.exports = new mongoose.model('Image', imageSchema);
