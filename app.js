const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

//app.use(express.static("public"))
app.use(express.static(__dirname+'/public'))

app.use(require('./routes/list'));
app.use(require('./routes/index'));

app.use(require('./routes/register'));
app.use(require('./routes/creator-login'));
app.use(require('./routes/upload'));
app.listen(5000, () => {
    console.log("server up and running");
});