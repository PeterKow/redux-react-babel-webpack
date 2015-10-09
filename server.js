/**
 * Created by Peter on 26/08/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan =  require('morgan');
var cookieParser =  require('cookie-parser');

var port = process.env.PORT || 8000;
var environment = process.env.NODE_ENV;

var MONGO_DB = require('./src/server/config').MONGO_DB;
var mongoose = require('mongoose');
mongoose.connect(MONGO_DB.MONGO_URI); // connect to database

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms


var publicPath = path.resolve(__dirname, 'src/public');
app.use(express.static(publicPath));

var webpackServerRunning = require('./webpackServer')(app);

// passport init
var passport = require('./src/server/passport')(app);
var routes = require('./src/server/app/routes.js')(app, passport);

// all routes are handled by client
app.get('/*', function(req, res, next){
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, function() {
  console.log('Server started at port ', port);
});