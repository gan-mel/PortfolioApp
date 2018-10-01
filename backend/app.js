const express = require('express')
const app = express()
const router = express.Router();
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const nav = [
  { link: '/posts', title: 'posts' },
  { link: '/readPosts', title: 'Read Posts' }

];

const postsRouter = require('./src/routes/postsRouter')(nav);
const readPostRouter = require('./src/routes/readPostRouter')(nav);



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/posts', postsRouter);
app.use('/readPosts', readPostRouter);


// app.use(cookieParser());





app.get('/', (req, res) => res.send('Hello World!'))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))