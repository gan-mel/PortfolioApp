const express = require('express')
const app = express()
const router = express.Router();
const port = 3000
const MongoClient = require('mongodb').MongoClient;

const books = 

[
    {
      "_id": "5bad50097d59075a2e34fb39",
      "index": 0,
      "guid": "dd0e7cbf-f875-4a14-b682-5817de6d20f7",
      "isActive": true,
      "balance": "$1,433.20",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "blue",
      "name": "Debbie Lamb",
      "gender": "female",
      "company": "ENJOLA",
      "email": "debbielamb@enjola.com",
      "phone": "+1 (822) 401-3393",
      "address": "728 Prospect Street, Wacissa, Delaware, 6655",
      "about": "Eiusmod id Lorem dolor ipsum Lorem cupidatat eu officia duis voluptate minim nulla consequat. Eu incididunt ipsum culpa dolor exercitation sint. Duis exercitation irure aliquip sunt commodo non dolor mollit. Sint irure ad sint aute in proident aliqua. Labore aliquip ut proident consectetur cupidatat labore ipsum sunt nisi nostrud duis ut do. Commodo nostrud incididunt amet et sint veniam ullamco pariatur in veniam proident qui et. Labore pariatur incididunt quis quis officia sit.\r\n",
      "registered": "2017-06-08T02:33:41 -03:00",
      "latitude": 24.420532,
      "longitude": 77.977832,
      "tags": [
        "enim",
        "excepteur",
        "et",
        "mollit",
        "est",
        "sunt",
        "reprehenderit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Jarvis Oliver"
        },
        {
          "id": 1,
          "name": "Barnett Quinn"
        },
        {
          "id": 2,
          "name": "Margaret Prince"
        }
      ],
      "greeting": "Hello, Debbie Lamb! You have 4 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5bad5009ef52dcda67310db0",
      "index": 1,
      "guid": "69a0a5ae-080f-4dfc-90d3-5bec590faff3",
      "isActive": true,
      "balance": "$1,746.02",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "blue",
      "name": "Jodie Good",
      "gender": "female",
      "company": "INTRADISK",
      "email": "jodiegood@intradisk.com",
      "phone": "+1 (941) 581-2133",
      "address": "984 Jaffray Street, Deseret, California, 3804",
      "about": "Consequat sint eiusmod cupidatat veniam consequat veniam et. Id magna ut excepteur do. Ullamco officia anim magna dolore amet duis culpa do consequat. Consectetur ex Lorem nisi pariatur anim adipisicing do aliquip officia aute. Ipsum nulla exercitation excepteur quis amet pariatur.\r\n",
      "registered": "2015-01-09T09:05:23 -02:00",
      "latitude": -2.846319,
      "longitude": 80.411363,
      "tags": [
        "reprehenderit",
        "nostrud",
        "minim",
        "consectetur",
        "amet",
        "minim",
        "enim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Deirdre Bradley"
        },
        {
          "id": 1,
          "name": "Glenn Berg"
        },
        {
          "id": 2,
          "name": "Haley Weeks"
        }
      ],
      "greeting": "Hello, Jodie Good! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5bad50095d77242731922853",
      "index": 2,
      "guid": "18fff776-5b64-4692-81fc-04c246a92e70",
      "isActive": true,
      "balance": "$1,258.15",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "brown",
      "name": "Elisa Villarreal",
      "gender": "female",
      "company": "ASSISTIA",
      "email": "elisavillarreal@assistia.com",
      "phone": "+1 (957) 533-2678",
      "address": "121 Bryant Street, Caroleen, Montana, 4735",
      "about": "Ipsum quis eu dolore duis ipsum commodo pariatur. Nisi irure est ipsum ex. Enim laboris pariatur ea culpa quis dolor.\r\n",
      "registered": "2016-05-12T02:39:58 -03:00",
      "latitude": -40.998295,
      "longitude": -25.889527,
      "tags": [
        "aliquip",
        "non",
        "esse",
        "Lorem",
        "non",
        "anim",
        "reprehenderit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Chase Baxter"
        },
        {
          "id": 1,
          "name": "Olivia Hill"
        },
        {
          "id": 2,
          "name": "Vivian Rogers"
        }
      ],
      "greeting": "Hello, Elisa Villarreal! You have 2 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5bad5009a21b2be23464348f",
      "index": 3,
      "guid": "beeb69d3-28fa-43e4-a15b-daf90ff750ef",
      "isActive": false,
      "balance": "$2,930.57",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "green",
      "name": "Colon Kent",
      "gender": "male",
      "company": "ECLIPSENT",
      "email": "colonkent@eclipsent.com",
      "phone": "+1 (838) 551-3735",
      "address": "510 Estate Road, Marion, Maryland, 8577",
      "about": "Ad tempor reprehenderit excepteur fugiat. Minim minim aliqua nisi nulla enim ea veniam cillum enim deserunt excepteur velit. Enim aute enim cillum quis cupidatat do consequat enim esse laboris ad cillum id. Excepteur incididunt nostrud Lorem mollit dolore. Velit quis reprehenderit mollit eiusmod id enim cillum id sit deserunt pariatur voluptate magna. Voluptate deserunt consectetur do eiusmod fugiat nisi.\r\n",
      "registered": "2017-01-07T02:19:34 -02:00",
      "latitude": 17.268246,
      "longitude": -104.483428,
      "tags": [
        "sint",
        "cupidatat",
        "sit",
        "deserunt",
        "ex",
        "in",
        "sit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Vance Barlow"
        },
        {
          "id": 1,
          "name": "Freeman Moreno"
        },
        {
          "id": 2,
          "name": "Louise Moore"
        }
      ],
      "greeting": "Hello, Colon Kent! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5bad500993c524a1cc61d327",
      "index": 4,
      "guid": "4551338f-ec73-48e5-9d81-436488416261",
      "isActive": false,
      "balance": "$2,271.38",
      "picture": "http://placehold.it/32x32",
      "age": 40,
      "eyeColor": "brown",
      "name": "Barrett Ross",
      "gender": "male",
      "company": "OVOLO",
      "email": "barrettross@ovolo.com",
      "phone": "+1 (956) 481-2363",
      "address": "294 Sutter Avenue, Muir, Guam, 824",
      "about": "Culpa enim dolore pariatur magna voluptate irure dolore Lorem cupidatat. Nulla ea ipsum excepteur reprehenderit nulla magna fugiat aliqua aliquip fugiat. Aute ut nostrud deserunt officia est. Laboris non adipisicing in do eu reprehenderit sint fugiat aliqua. Cillum do culpa ipsum reprehenderit labore qui esse aute anim ad tempor quis officia irure. Quis deserunt culpa consectetur magna ut amet pariatur elit commodo.\r\n",
      "registered": "2018-05-27T12:06:19 -03:00",
      "latitude": -63.447733,
      "longitude": -145.604006,
      "tags": [
        "id",
        "aliquip",
        "nisi",
        "veniam",
        "proident",
        "excepteur",
        "ad"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Jeannette Cardenas"
        },
        {
          "id": 1,
          "name": "Walls Velazquez"
        },
        {
          "id": 2,
          "name": "Natalia Foster"
        }
      ],
      "greeting": "Hello, Barrett Ross! You have 4 unread messages.",
      "favoriteFruit": "banana"
    }
  ]

const uri = "mongodb+srv://ganner_42:<PASSWORD>@gandb-xsdxz.mongodb.net/test?retryWrites=true";




app.get('/', (req, res) => res.send('Hello World!'))


app.get('/bla',
(req, res) => {
    const dbName = 'Testor';

    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(uri);
            console.log("connected mongo");

            const db = client.db(dbName);

            await db.collection('books').insertMany(books);
            
            res.json(response);
        } catch (err){
                debug(err.stack);
                console.log(err.stack);
        }
    })

})
// MongoClient.connect(uri, function(err, client) {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//  });



app.listen(port, () => console.log(`Example app listening on port ${port}!`))