// create a web server that can respond to requests for comments
// and can save new comments to a file

// load the http module
var http = require('http');

// load the fs module
var fs = require('fs');

// create a server
var server = http.createServer(function(req, res) {

  // if the request is a GET request for '/comments'
  if (req.method === 'GET' && req.url === '/comments') {
    // read the comments from the file
    fs.readFile('./comments.json', function(err, data) {
      if (err) {
        // if there was an error reading the file, log the error
        console.error(err);
      } else {
        // otherwise, send the comments back to the client
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
      }
    });
  }

  // if the request is a POST request to '/comments'
  if (req.method === 'POST' && req.url === '/comments') {
    // create a variable to store the data
    var comment = '';

    // on every 'data' event, add the data to the comment variable
    req.on('data', function(data) {
      comment += data;
    });

    // on every 'end' event, write the comment to the file
    req.on('end', function() {
      // write the comment to the file
      fs.writeFile('./comments.json', comment, function(err) {
        if (err) {
          // if there was an error writing the file, log the error
          console.error(err);
        } else {
          // otherwise, send a '201 Created' status code
          res.writeHead(201);
          res.end();
        }
      });
    });
  }

});

// listen on port 3000
server.listen(3000);