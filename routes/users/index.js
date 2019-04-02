const users = require('express').Router();
const all = require('./all');
const single = require('./single')

// Get a list of all users
users.get('/', all);

// Get a single user, based on their ID
users.get('/:id', single);

// Get a single user, but...
// limit the routes to only single digit searches for IDs 1-9
// users.get('/:id([1-9]{1})', single);

module.exports = users;