// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const User = require('../models/user');
const Restaurant = require('../models/restaurants');
const Review = require('../models/reviews');

// add a "describe block" for restaurant tests
describe('Restaurant model', () => {
    it('should be able to grab an array of restaurants', async () => {
        // Write the code you wish existed
        const arrayOfRestaurants = await Restaurant.getAll();
        expect(arrayOfRestaurants).to.be.instanceOf(Array);
    });
});
// describe('Sanity check', function () {
//     it('should be 2', function () {
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });

describe('User model', () => {
    // const poop = '💩';
    // 😃
    it('should be able to retreive by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
    //    theUser.should.have.length(1);
    });

    // 😢
    it('should error if no user by id', async () => {
        const theUser = await User.getById(276345);
        expect(theUser).to.be.null;
        // theUser.should.be.an.instanceOf(User);
    //    theUser.should.have.length(1);
    });

    // As long as there is no exception thrown in an it block,
    // that counts as a passing test.
    // it('should solve global warming', async () => {});
    // it('should cure cancer', async () => {});
    // it('should make me rich', async () => {});

    it('should update the user', async () => {
        // grab a user with id 2
        const theUser = await User.getById(2);

        // update the email
        theUser.email = 'new@new.com';
        // save the user
        await theUser.save();

        // re-grab the user with id 2
        const alsoTheUser = await User.getById(2);
        // // expect the email to be equal to the new value
        expect(theUser.email).to.equal('new@new.com');


        // theUser.save()
        //     .then(async (report) => {
        //         // console.log(report);
        //         // re-grab the user with id 2
        //         const alsoTheUser = await User.getById(2);
        //         // expect the email to be equal to the new value
        //         expect(alsoTheUser.email).to.equal('neashfakfaksgfaksjgfajsgfajsgfsjafgasjfgsajfgsjagdfsaw@new.com');
        //     });
    });


    it('should not have the same email after updating it', async () => {
        // grab a user with id 2
        const theUser = await User.getById(2);
        // grab the current value for the email field
        const theOldEmail = theUser.email;

        // update the email to a new value
        // using the unix timestamp as part of the address
        const theNewEmail = `new${new Date().getTime()}@email.com`;
        theUser.email = theNewEmail;

        // save the user to the database
        await theUser.save();

        // re-grab the user with id 2
        const alsoTheUser = await User.getById(2);

        // expect the email not to be equal to the new value;
        expect(alsoTheUser.email).not.be.to.equal(theOldEmail);
        expect(alsoTheUser.email).to.equal(theNewEmail);


        // theUser.save()
        //     .then(async (report) => {
        //         // console.log(report);
        //         // re-grab the user with id 2
        //         const alsoTheUser = await User.getById(2);
        //         // expect the email to be equal to the new value
        //         expect(alsoTheUser.email).to.equal('new3asdfadf@new.com');
        //     });
    });   
    
    it('should encrypt the password', async () => {
        const password = "bacon";
        // get a user with id 1
        const theUser = await User.getById(1);
        // set their password field to "bacon"
        theUser.setPassword(password);

        // compare their password to 
        expect(theUser.password).not.to.equal(password);
        // it should be false
    });

    it('should be able to check for correct passwords', async () => {
        // get a user with id 1
        const theUser = await User.getById(1);
        // set their password field to "bacon"
        theUser.setPassword("bacon");

        // save them to the database
        await theUser.save();

        // get them back out of the database
        const sameUser = await User.getById(1);

        // ask them if their password is "bacon"
        const isCorrectPassword = sameUser.checkPassword("bacon");
        expect(isCorrectPassword).to.be.true;

        const isNotCorrectPassword = sameUser.checkPassword("tofu");
        expect(isNotCorrectPassword).to.be.false;
    })

    
});

describe('Review model', () => {
    // Can I get one review?
    it('should be able retrieve a review by id', async () => {
        // hopes and dreams
        const thatReview = await Review.getById(2);
        expect(thatReview).to.be.an.instanceOf(Review);
    });
    
    // Can I get all reviews?
    it('should be able to retrieve all reviews', async () => {
        const aBunchOfReviews = await Review.getAll();
        expect(aBunchOfReviews).to.be.an.instanceOf(Array);
        // and make sure each of them is an array
        // Use a plain for loop, so that the exception does not
        // get swallowed by a .forEach callback.
        for (let i=0; i<aBunchOfReviews.length; i++) {
            expect(aBunchOfReviews[i]).to.be.an.instanceOf(Review);
        }
    });
});

describe('Users and Reviews', () => {
    it('a user instance should be able to retrieve all their reviews', async () => {
        // grab a user by id 3
        const theUser = await User.getById(3);
        // then get all their reviews


        // const theReviews = await theUser.getReviews();
        const theReviews = await theUser.reviews;


        // confirm that their reviews are in an array
        expect(theReviews).to.be.an.instanceOf(Array);
        // and that the array is the correct length, which should be 3
        expect(theReviews).to.have.lengthOf(3);
        // and that each one is an instance of Review
        for (let i=0; i<theReviews.length; i++) {
            expect(theReviews[i]).to.be.an.instanceOf(Review);
        }
    })
});