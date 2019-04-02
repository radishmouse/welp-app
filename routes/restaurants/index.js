const restaurants = require('express').Router();

restaurants.get('/', (req, res) => {
    console.log('Restaurants Page');
    res.send('Restaurants page');
});

module.exports = restaurants;