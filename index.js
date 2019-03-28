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
    } else if (req.url.startsWith("/users")) {   

        const parts = req.url.split("/");
        console.log(parts);
        // when the req.url is "/users", parts is [ '', 'users' ]
        // when req.url is "/users/3", parts is [ '', 'users', '3' ]

        if (parts.length === 2) {
            const allUsers = await User.getAll();
            const userJSON = JSON.stringify(allUsers);    
            res.end(userJSON);
        } else if (parts.length === 3) {
            // the id will be parts[2]
            const userId = parts[2];
            // get user by id
            const theUser = await User.getById(userId);
            const userJSON = JSON.stringify(theUser);
            res.end(userJSON);
        } else {
            res.statusCode = 404;
            res.end('Resource not found.');
        }

    } else {
        res.end(`{
            message: "Thank you for your patronage. Please send bitcoin."
        }`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});