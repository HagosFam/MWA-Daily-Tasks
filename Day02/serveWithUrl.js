const http = require("http");
const fs = require("fs");
let statusCode;
      let fileBuffer;
const serveAllRequests = function (req, res) {
  switch (req.url) {
    case "/json":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end("{'message' :'hellow world'}");
      break;
    case "/index":
      res.setHeader("Content-Type", "text/html");
      fs.readFile(__dirname + "\\index.html", function (err, buffer) {
        if (err) {
          statusCode = 404;
          fileBuffer = "File not Found";
        } else {
          statusCode = 200;
          fileBuffer = buffer;
        }
        res.writeHead(statusCode);
        res.end(fileBuffer);
      });
      break;

      case "/page1":
      res.setHeader("Content-Type", "text/html");
      fs.readFile(__dirname + "\\page1.html", function (err, buffer) {
        if (err) {
          statusCode = 404;
          fileBuffer = "File not Found";
        } else {
          statusCode = 200;
          fileBuffer = buffer;
        }
        res.writeHead(statusCode);
        res.end(fileBuffer);
      });
      break;

      case "/page2":
        res.setHeader("Content-Type", "text/html");
        fs.readFile(__dirname + "\\page2.html", function (err, buffer) {
          if (err) {
            statusCode = 404;
            fileBuffer = "File not Found";
          } else {
            statusCode = 200;
            fileBuffer = buffer;
          }
          res.writeHead(statusCode);
          res.end(fileBuffer);
        });
        break;

    default:
      break;
  }
};

const server = http.createServer(serveAllRequests); 
      
server.listen(3000, "localhost", function () {
  console.log("Server is running on http://localhost:3000");
});