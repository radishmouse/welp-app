const Restaurant = require('../../models/restaurants');

module.exports = async (req, res) => {
  const allRestaurants = await Restaurant.getAll();
  console.log('Restaurants', allRestaurants);

  res.status(200).json({ allRestaurants });
  };