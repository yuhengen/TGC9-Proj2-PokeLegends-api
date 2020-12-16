const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let userdata = await db.collection('userdata').find().toArray();
    res.send(userdata);
})

module.exports = router;