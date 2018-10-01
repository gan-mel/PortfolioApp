const express = require('express');
const { MongoClient } = require('mongodb');


const reading = express.Router();


function router(nav) {
    reading.route('/')
      .get((req, res) => {
        const { author } = req.params;
        const url = 'mongodb+srv://ganner_42:Zingin11!@gandb-xsdxz.mongodb.net/test?retryWrites=true';
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