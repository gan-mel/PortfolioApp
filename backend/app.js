const express = require('express')
const app = express()
const router = express.Router();
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
require('../build/karma.conf');

// import Endpoint from './endpoint';

// const endpoint = new Endpoint('messagesBoard', 'messages'); 
// endpoint.entireCollection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const nav = [
  { link: '/posts', title: 'posts' },
  { link: '/readPosts', title: 'Read Posts' },
  { link: '/signUp', title: 'Sign Up' }
];



const postsRouter = require('./src/routes/postsRouter')(nav);
const readPostRouter = require('./src/routes/readPostRouter')(nav);
const signUp = require('./src/routes/authRouter')(nav);



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/posts', postsRouter);
app.use('/readPosts', readPostRouter);
app.use('/auth', signUp);


// app.use(cookieParser());





app.get('/', (req, res) => res.send('Hello World!'))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))