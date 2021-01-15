const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

let db = MongoUtil.getDB();

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let userdata = await db.collection('userdata').find().toArray();
    res.send(userdata);
})

router.get('/:username', async (req, res) => {
    let db = MongoUtil.getDB();
    let username = await db.collection('userdata').findOne({'username': req.params.username})
    res.send(username)
})

// register account
router.post('/', async (req, res) => {
    let db = MongoUtil.getDB()

    let {
        username,
        password,
        email,
        gender,
        nickname,
        pokedollar,
        party_pokemon,
        store_pokemon,
        pokedex,
        badges,
        bag,
        tutorial
    } = req.body;

    let results = await db.collection('userdata').insertOne({
        username,
        password,
        email,
        gender,
        nickname,
        pokedollar,
        party_pokemon,
        store_pokemon,
        pokedex,
        badges,
        bag,
        tutorial
    })

    res.send({'insertedId': results.insertedId})
})

// update account
router.patch('/:username', async (req, res) => {
    let db = MongoUtil.getDB();
    let username = req.params.username

    let {
        pokedollar,
        party_pokemon,
        store_pokemon,
        pokedex,
        badges,
        bag,
        tutorial
    } = req.body;

    let results = await db.collection('userdata').updateOne({
        'username': username
    }, {
        '$set': {
            pokedollar,
            party_pokemon,
            store_pokemon,
            pokedex,
            badges,
            bag,
            tutorial
        }

    });

    res.send({'status': 'OK'})
})

module.exports = router;
