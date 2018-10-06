const express = require('express');
const { MongoClient } = require('mongodb');

const posting = express.Router();
const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    bookId: 656,
    read: false
  },
  {
    title: 'Les Misérables',
    genre: 'Historical Fiction',
    author: 'Victor Hugo',
    bookId: 24280,
    read: false
  },
  {
    title: 'The Time Machine',
    genre: 'Science Fiction',
    author: 'H. G. Wells',
    read: false
  },
  {
    title: 'A Journey into the Center of the Earth',
    genre: 'Science Fiction',
    author: 'Jules Verne',
    read: false
  },
  {
    title: 'The Dark World',
    genre: 'Fantasy',
    author: 'Henry Kuttner',
    read: false
  },
  {
    title: 'The Wind in the Willows',
    genre: 'Fantasy',
    author: 'Kenneth Grahame',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  },
  {
    title: 'Childhood',
    genre: 'Biography',
    author: 'Lev Nikolayevich Tolstoy',
    read: false
  }];

function router(nav) {
  posting.route('/')
    .post((req, res) => {
      const url = 'mongodb+srv://ganner_42:Zingin11!@gandb-xsdxz.mongodb.net/test?retryWrites=true';
      const dbName = 'messagesBoard';
      let bod = req.body;
      (async function mongo() {
        let client;
     if (bod.length > 0){
        try {
          
          client = await MongoClient.connect(url);
          console.debug('connected to Mongo to Post');

          const db = client.db(dbName);

          const response = await db.collection('messages').insertOne(bod);
          
          res.json(response);
    
        } catch (err) {
          console.log(err.stack);
          res.sendStatus(500);
        }

        client.close();
      } else {
        console.log("empty value received")
        res.sendStatus(400);
      }
    }  ());
    });
  return posting;
}

module.exports = router;
