const express = require('express');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');

const sign = express.Router();

function router(nav) {
    sign.route('/')
      .post((req, res) => {
        const url = 'mongodb+srv://ganner_42:Zingin11!@gandb-xsdxz.mongodb.net/test?retryWrites=true';
        const dbName = 'authentication';
        let bod = req.body;
        (async function mongo() {
          let client;
       if (bod.length > 0 || Object.keys(req.body).length > 0  ){
          try {
            
            client = await MongoClient.connect(url);
            console.debug('[register] connected to Mongo to register');
  
            const db = client.db(dbName);
  
            const response = await db.collection('users').insertOne(bod);

            const col = await db.collection('users');
             const signer = await col.find({"_id":response.insertedId}).toArray()
//console.log(JSON.stringify(signer[0].first) + "  signed");
console.log(response.insertedId+ "  insertid")
const token = jwt.sign({"token":response.insertedId}, "123");
            res.json(
                {"token":token, 
                "name":signer[0].first
                });
      
          } catch (err) {
            console.log(err.stack);
            res.sendStatus(500);
          }
  
          client.close();
        } else {
          console.log(`[register] empty value received   ${req.body}`)
          console.log(JSON.stringify(req.body))
          res.sendStatus(400);
        }
      }  ());
      });
    return sign;
  }

  module.exports = router;
