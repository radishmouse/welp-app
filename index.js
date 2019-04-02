// Bring in the express module.
const express = require('express');
const PORT = 3000;

// Create an express app.
// It's roughly equivalent to the result of calling `http.createServer()`
const app = express();

// Import our routes
const routes = require('./routes');

//  Connect all our routes to our application
app.use('/', routes);

// Listen on our PORT
app.listen(PORT, () => {
    console.log(`Your amazing express app is running on port ${PORT}`);
});