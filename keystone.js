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

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'portfolio-cms',
	'brand': 'portfolio-cms',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'port': 5500,
  'mongo': 'mongodb://localhost/portfolio-cms' || process.env.MONGO_URI || process.env.MONGOLAB_URI,
  'wysiwyg additional options': {
        verify_html: false
  },
  'wysiwyg cloudinary images': true
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
	galleries: 'galleries',
  users: 'users',
	contacts: 'contacts',
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
