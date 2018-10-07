const express = require('express');
const { MongoClient } = require('mongodb');

const sign = express.Router();

function router(nav){
    sign.route('/signUp')
    .post((req,res) => {
        console.log(req.body);
        res.sendStatus(200);
    })
    return sign;
}

module.exports = router;