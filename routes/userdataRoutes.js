const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;
const UserModel = require('../models/UserModel')
const passport = require('../passport/setup');

let db = MongoUtil.getDB();

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let userdata = await db.collection('userdata').find().toArray();
    res.send(userdata);
})

router.get('/:username', async (req, res) => {
    let db = MongoUtil.getDB();
    let username = await db.collection('userdata').findOne({ 'username': req.params.username })
    res.send(username)
})

// register account
router.post('/', async (req, res) => {
    let db = MongoUtil.getDB()

    let { username, password, email, gender, game_currency, party_pokemon, store_pokemon, pokedex, badges, bag, tutorial } = req.body;

    let results = await db.collection('userdata').insertOne({ username, password, email, gender, game_currency, party_pokemon, store_pokemon, pokedex, badges, bag, tutorial })

    res.send({ 'insertedId': results.insertedId })
})

// process the login
router.post('/login', async (req, res, next) => {
    // create a authentication function
    // first argument is 'local', means we want to use the local strategy
    let authProcess = passport.authenticate('local', async function (err, user, info) {

        // if there is an error
        if (err) {
            res.send("Error logging in")
        }
        res.send(user)
        // if the user is not found (the email given is not in the mongo documents)
        if (!user) {
            res.send("User is not found")
        }

        // caution: the I below is upper case
        let loginError = req.logIn(user, (loginError) => {
            if (loginError) {
                res.send("Error logging in")
            }
            // else {
            //     req.flash("success_messages", "Login successful!");
            // }
        })

    });

    // call the function that will do authentication
    authProcess(req, res, next);
})

module.exports = router;
