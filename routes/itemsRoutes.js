const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let items = await db.collection('items').find().toArray();
    res.send(items);
})

module.exports = router;