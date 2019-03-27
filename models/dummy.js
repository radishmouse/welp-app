const User = require('./user');

async function main() {
    debugger;
    const theUser = await User.getById(3);
    console.log(theUser);
}

main();