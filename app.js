const express = require('express');
const app = express();
const routes = require('./routes')
const Web3 = require('web3');
const contract = require('truffle-contract');
require('dotenv').config();
app.use(express.json())

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
//app.set('uploads', __dirname + '/uploads');

//app.use(express.static("public"))
app.use(express.static(__dirname + '/public'))

app.use(require('./routes/list'));
app.use(require('./routes/index'));
app.use(require('./routes/register'));
app.use(require('./routes/creator-login'));
app.use(require('./routes/upload'));
app.use(require('./routes/api/model'));
//app.use(require('./routes/model1'));
//app.use(require('./routes/connect-bc-upload'));
app.use(require('./connect.js'));

app.listen(5000, '0.0.0.0', () => {
    console.log("server up and running");
});