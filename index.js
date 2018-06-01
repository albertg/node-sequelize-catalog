const express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var userRoutes = require('./src/routes/userRoute');
var securityRoutes = require('./src/routes/securityRoutes');
var employeeRoutes = require('./src/routes/employeeRoutes');
var db = require('./src/database/models/index');

const app = express();

//body-parser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//use morgan to log requests to console
app.use(morgan('dev'));

//routing
securityRoutes(app, db);
userRoutes(app, db);
employeeRoutes(app, db);

app.get('/', (req, res) => {
    res.send("Node and express server is running on port: 3000");
});

app.listen(3000, () => {
    console.log("Server listening on port: 3000");
});