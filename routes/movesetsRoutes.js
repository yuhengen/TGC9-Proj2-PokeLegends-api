const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let movesets = await db.collection('movesets').find().toArray();
    res.send(movesets);
})

module.exports = router;