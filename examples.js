const db = require('./conn');

db.any('SELECT * from users')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        // error;
    });