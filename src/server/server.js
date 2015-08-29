/**
 * Created by Peter on 26/08/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan =  require('morgan');
var cookieParser =  require('cookie-parser');


//import mongodb from 'mongodb';
var config = require('./config');
var passport = require('./passport');

var port = process.env.PORT || 4000;
var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(express.static('./src/public/'));

passport.init(app);

app.listen(port, function() {
  console.log('Server started at port ', port);
});



///**
// * Created by Peter on 26/08/15.
// */
//import express from 'express'
//const app = express();
//import bodyParser from 'body-parser';
//import compress from 'compression';
//import cors from 'cors';
//import path from 'path';
//
//
////import mongodb from 'mongodb';
//import config from './config'
//import passport from './passport'
//
//const port = process.env.PORT || 4000;
//const environment = process.env.NODE_ENV;
//
//app.use(bodyParser.urlencoded({
//  extended: true
//}));
//app.use(bodyParser.json());
//app.use(compress());
//app.use(cors());
//app.use(express.static('./src/public/'));
//
//const server = app.listen(port, function() {
//  console.log('Server started at port ', server.address().port);
//});