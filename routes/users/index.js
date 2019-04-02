const users = require('express').Router();
const all = require('./all');
const single = require('./single')

users.get('/', all);
users.get('/:id', single)

module.exports = users;