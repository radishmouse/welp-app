// Bring in the database connection.
const db = require('./conn');

// declare the class
class Restaurant {
    // getAll is a static method
    static getAll() {
        // .any returns 0 or more results in an array
        // but that's async, so we `return` the call to db.any
        return db.any(`select * from restaurants`);
    }

    // get reviews for this restaurant
    getReviews(userId=-1) {
        // if userId is -1, get all reviews
        // else, get reviews written by
        // a specific user
    }
}

// export the class
module.exports = Restaurant;