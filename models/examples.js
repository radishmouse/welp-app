const db = require('./conn');

function getUserById(theId) {
    // const theId = 3;
    return db.any(`SELECT * from users where id=${theId}`)
}

// async functions can use the keyword "await"
async function main() {
    // async + await!
    const user3 = await getUserById(3); // "await" waits for promises
                                        // it's like an implicit ".then"
    console.log(user3);

    // Promises. Meh.
    // getUserById(3)
    //     .then(function (user3) {
    //         console.log(user3);
    //     })

}
// main();

// main2 does *not* have to be async
function main2() {
    const idArray = [1, 2, 3, 4];
    idArray.forEach(async function (id) {
        const user = await getUserById(id);
        console.log(user);
    });
    // .map runs faster than the `await`, so i get back an array of promises
    // const emailArray = idArray.map(async function (id) {
    //     const user = await getUserById(id);
    //     return user.email;
    // });
    // console.log(emailArray);

}
main2();

async function main3() {
    const idArray = [1, 2, 3, 4];
    const userArray = [];
    idArray.forEach(async function (id) {
        const user = await getUserById(id);
        // return console.log(user);
        userArray.push(user);
    });
    console.log(userArray);
    return userArray;
}
// const theUsers = main3();
// console.log(theUsers);

function main4() {
    const idArray = [1, 2, 3, 4];

    const userPromiseArray = idArray.map(function (id) {
        return getUserById(id);
    });

    return Promise.all(userPromiseArray);
}

// main4()
//     .then(function (userArray) {
//         console.log(userArray);        
//     })

async function main5() {
    const user3 = await getUserById(3);
    const user4 = await getUserById(4);

    console.log(user3);
    console.log(user4);
}

// main5();

// const user4 = await getUserById(4);
// console.log(user4);

// getUserById(3)
//     .then(function (aUser) {
//         console.log(aUser);
//         getUserById(4)
//             .then(function (bUser) {
//                 console.log(bUser);
//             }) 
//     })
