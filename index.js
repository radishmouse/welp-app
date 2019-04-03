const express = require('express'); // Bring in the express library.
const es6Renderer = require('express-es6-template-engine');

const app = express();              // Create a new express app.
const http = require('http');
const querystring = require('querystring');

// const hostname = '127.0.0.1';
const port = 3000;


// Import my model class
const Restaurant = require('./models/restaurants');
const User = require('./models/user');

app.engine('html', es6Renderer); // introduce them:
// "hey app, meet es6Renderer. they speak html"
app.set('view engine', 'html'); // tell express to use as its view engine the thing that speaks html

app.set('views', 'views'); // tell express where to find the view files. (The second argument is the name of the directory where my template files will live.)

// Configure express to use the built-in middleware
// that can deal with form data.
app.use(express.urlencoded({ extended: true }));


// When they ask for the login page, send the login form.
app.get('/login', (req, res) => {
    // send them the form!!!
    // res.send('this is not the login form');
    res.render('login-form');
});

// When they submit the form, process the form data.
app.post('/login', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    // res.send('no soup for you');
    // let's just assume they typed in
    // the correct password.
    res.redirect('/dashboard');
    // TODO: check password for real.
});

app.get('/dashboard', (req, res) => {
    res.send('welcome to your welp dashboard');
});


app.get('/restaurants', async (req, res) => {
    const allRestaurants = await Restaurant.getAll();    
    // const restaurantJSON = JSON.stringify(allRestaurants);    
    // res.json will do 2 things:
    // 1. it converts your JavaScript Object or Array to a JSON string
    // 2. it puts the correct Content-Type header on the response
    res.json(allRestaurants);
});

app.get('/users', async (req, res) => {
    const allUsers = await User.getAll();
    res.json(allUsers);
});
app.get('/users/:id', async (req, res) => {
    // How to grab a piece out of req.params (or any object):
    // const id = req.params.id;
    // This is known as "destructuring"
    const {id} = req.params;
    const theUser = await User.getById(id);
    res.json(theUser);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});