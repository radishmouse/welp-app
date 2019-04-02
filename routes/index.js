const routes = require('express').Router();
const users = require('./users');
const restaurants = require('./restaurants')

routes.use('/users', users);
routes.use('/restaurants', restaurants);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;