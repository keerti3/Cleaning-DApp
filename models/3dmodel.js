const mongoose = require('mongoose');
  
const modelSchema = new mongoose.Schema({
    name: String,
    desc: String,
    creator: String,
});
  
module.exports = new mongoose.model('model', modelSchema);
