// Bring in the database connection.
const db = require('./conn');
const Restaurant = require('./restaurants');

// declare the class
class Review {
    // getAll is a static method
    static getAll() {
        // .any returns 0 or more results in an array
        // but that's async, so we `return` the call to db.any
        return db.any(`select * from reviews`);
    }

    static getLatest(howMany=10) {
        // grab 10 latest, for any restaurants
    }

    restaurant() {
        // get the restaurant instance for this
        // review from the database
        // and turn it into an instance of Restaurant
    }

    // convenience methods for formatting
    summary() {
        return this.content.substring(0, 200);
    }

}

// export the class
module.exports = Review;