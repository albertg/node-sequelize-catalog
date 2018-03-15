const express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

const app = express();

//body-parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//use morgan to log requests to console
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("Node and express server is running on port: 3000");
});

app.listen(3000, () => {
    console.log("Server listening on port: 3000");
});