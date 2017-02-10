// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    keystone = require('keystone');
 
    keystone.set('app', app);
    keystone.set('mongoose', mongoose);
    path = require('path'); // file and dir path handling



app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */



app.use( express.static(__dirname+"/tpl") ); //tpl

// Normal routes
app.get('/media-overview/*', function(req, res){
  res.render('home.jade');
});
app.get("/tpl/homepage", function(req, res, next){
  res.render("homepage.jade");
});


app.get("/tpl/module-1/app", function(req, res, next){
  res.render("app.jade");
});

// app.get("/tpl/module-1/blocks/header", function(req, res, next){
//   res.render("header.jade");
// });

// app.get("/tpl/module-1/blocks/nav", function(req, res, next){
//   res.render("nav.jade");
// });

app.get("/tpl/module-1/section-1/media-is/media-is", function(req, res, next){
  res.render("media-is.jade");
});

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'ratings-academy-dev',
	'brand': 'ratings-academy-dev',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'port': 5055
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	posts: ['posts', 'post-categories'],
	galleries: 'galleries'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
