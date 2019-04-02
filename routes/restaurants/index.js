const restaurants = require('express').Router();
const all = require('./all');

restaurants.get('/', all);

module.exports = restaurants;
