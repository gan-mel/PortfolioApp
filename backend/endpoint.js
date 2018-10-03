const express = require('express');
const { MongoClient } = require('mongodb');
const reading = express.Router();

export class Endpoint {
    constructor(dbName, collection, filter, method){
        this.dbName = dbName;
        this.collection = collection;
        this.filter = filter;
        this.method = method;
        this.DBurl = 'mongodb+srv://ganner_44:Tultul99++!@gandb-xsdxz.mongodb.net/test?retryWrites=true';

    }

    get entireCollection(){
            return this.getAllData();
    }

     getAllData() {
        reading.route('/')
          .get((req, res) => {
 
            (async function mongo() {
              let client;
              try {
                client = await MongoClient.connect(this.DBurl);
                console.debug('Connected to Mongo to Read');
      
                const db = client.db(this.dbName);
      
                const col = await db.collection(this.collection);
    
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

}