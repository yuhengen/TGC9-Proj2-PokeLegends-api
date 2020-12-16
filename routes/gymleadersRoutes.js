const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let gymleaders = await db.collection('gymleaders').find().toArray();
    res.send(gymleaders);
})

module.exports = router;