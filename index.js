const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Import my model class
const Restaurant = require('./models/restaurants');
const User = require('./models/user');

// "helper function" === "middleware"
// a.k.a. "request handler"
const server = http.createServer(async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // if req.url is "/restaurants", send them all restaurants
    // if it's "/users", send a list of users
    // else if it doesn't match either, send a welcome message

    if (req.url === "/restaurants") {
        const allRestaurants = await Restaurant.getAll();
        const restaurantJSON = JSON.stringify(allRestaurants);    
        res.end(restaurantJSON);
    } else if (req.url === "/users") {        
        const allUsers = await User.getAll();
        const userJSON = JSON.stringify(allUsers);    
        res.end(userJSON);
    } else {
        res.end(`{
            message: "Thank you for your patronage. Please send bitcoin."
        }`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});