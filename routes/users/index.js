const users = require('express').Router();

users.get('/', (req, res) => {
    console.log('Users Page');
    res.send('Users page');
});

module.exports = users;