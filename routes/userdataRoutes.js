const express = require('express');
const router = express.Router();
const MongoUtil = require('../MongoUtil')
const ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    let db = MongoUtil.getDB();
    let userdata = await db.collection('userdata').find().toArray();
    res.send(userdata);
})

router.get('/:username', async (req,res)=> {
    let db = MongoUtil.getDB();
    let username = await db.collection('userdata').findOne({
        'username': req.params.username
    })
    res.send(username)
})

module.exports = router;