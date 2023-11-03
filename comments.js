// Create web server

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Comment = require('../models/comment');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// CREATE A COMMENT
router.post('/', function(req, res) {
    Comment.create({// 1. Create web server
// 2. Create route for /comments
// 3. Create route for /comments/:id
// 4. Create route for /comments/:id/upvote
// 5. Create route for /comments/:id/downvote

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route for /comments
app.get('/comments', (req, res) => {
  res.send('Comments page');
});

// 3. Create route for /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('Comment id page');
});

// 4. Create route for /comments/:id/upvote
app.get('/comments/:id/upvote', (req, res) => {
  res.send('Upvote page');
});

// 5. Create route for /comments/:id/downvote
app.get('/comments/:id/downvote', (req, res) => {
  res.send('Downvote page');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 2. Create route for /comments
// 3. Create route for /comments/:id
// 4. Create route for /comments/:id/upvote
// 5. Create route for /comments/:id/downvote