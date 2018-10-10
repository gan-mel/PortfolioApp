const express = require('express');
const { MongoClient } = require('mongodb');

var path = require("path");
var configPath = path.resolve('./src/config/config.js');
const config = require(configPath).get(process.env.NODE_ENV);


const reading = express.Router();


function router(nav) {
    reading.route('/')
      .get((req, res) => {
        const { author } = req.params;
        const url = `mongodb+srv://${config.mongo.url}`;
        const dbName = 'messagesBoard';
  
        (async function mongo() {
          let client;
          try {
            client = await MongoClient.connect(url);
            console.debug('Connected to Mongo to Read');
  
            const db = client.db(dbName);
  
            const col = await db.collection('messages');

            const posts = await col.find().toArray();

            res.json(posts);
            
          } catch (err) {
            console.log(err.stack);
            res.sendStatus(500);
          }
  
          client.close();
        }());
      });
    return reading;
    }

    






module.exports = router;