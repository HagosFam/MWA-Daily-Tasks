const http = require('http');
const express = require('express')
require('dotenv').config;
const app = express();

// for serving files
const path = require("path")

// response with status code
app.get("/home", function(req, res){
    res.status(200).send("Home working fine");
});

// response with data 

app.get("/", function(req, res) {
 console.log("Json response served");
 res.status(200).json({"message":"Hello world", "Data":"Json"})
});

// file response for request 
// for file, we can use path, to dynamically get the path of files which we want to serve
app.get("/file", function(req, res) {
    console.log("File requested");
    res.status(200).sendFile(path.join(__dirname, "index.html"));
})


const server = app.listen(process.env.PORT, function(){
    console.log("App listening requests at ", server.address().port);
})