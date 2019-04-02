const User = require('../../models/user');

module.exports = async (req, res) => {
    const allUsers = await User.getAll();
    console.log('Users', allUsers);

    // Totally stole the next 4 lines from Chris - SR
    // res.json will do 2 things:
    // 1. it converts your JavaScript Object or Array to a JSON string
    // 2. it puts the correct Content-Type header on the response
    // res.json({ allUsers });
    
    // We can also pass a status messsage and the JSON response
    res.status(200).json({ allUsers });
  };