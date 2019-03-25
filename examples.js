const db = require('./conn');

function getUserById(theId) {
    // const theId = 3;
    return db.any(`SELECT * from users where id=${theId}`)
}

getUserById(1).then(console.log)

// getUserById(3)
//     .then(function (aUser) {
//         console.log(aUser);
//         getUserById(4)
//             .then(function (bUser) {
//                 console.log(bUser);
//             }) 
//     })
