const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Serve index.html for GET requests
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    // Serve a JSON response for POST requests
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const jsonData = { message: 'Received POST request' };
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(jsonData));
    });
  } else {
    // Return a 405 Method Not Allowed error for other request methods
    res.statusCode = 405;
    res.end('Method Not Allowed');
  }
});

server.listen(7272, () => {
  console.log('Server running on port 7272');
});
