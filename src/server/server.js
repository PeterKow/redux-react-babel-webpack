/**
 * Created by Peter on 26/08/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan =  require('morgan');
var cookieParser =  require('cookie-parser');

var port = process.env.PORT || 5000;
var environment = process.env.NODE_ENV;

var MONGO_DB = require('./config').MONGO_DB;
var mongoose = require('mongoose');
mongoose.connect(MONGO_DB.MONGO_URI); // connect to our database

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms

var isProduction = process.env.NODE_ENV === 'production';

var publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./bundle.js');
  bundle();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});


// passport init
var passport = require('./passport')(app);
require('./app/routes.js')(app, passport);

app.listen(port, function() {
  console.log('Server started at port ', port);
});