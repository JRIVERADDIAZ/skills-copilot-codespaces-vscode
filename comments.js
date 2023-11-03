// Create a web server that can respond to requests for /comments.json
// with a JSON-encoded array of comments, much like your server from Exercise 2
// of the previous chapter. However, this time, use the readFile method to
// load the comment database that you created in the previous exercise.
// When a GET request is made to the /comments.json URL, read the comments
// database, parse it to JSON, and respond with the JSON-encoded data.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/comments.json') {
    fs.readFile('./comments.json', function(err, data) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Server error');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, function() {
  console.log('Listening on port 3000');
});