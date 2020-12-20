const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

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

router.post('/', async (req, res) => {
    let db = MongoUtil.getDB()

    let {username, email} = req.body;

    let results = await db.collection('userdata').insertOne({username, email})

    res.send({'insertedId': results.insertedId})
})

module.exports = router;
