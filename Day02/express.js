const http = require('http');
const express = require('express');
require('dotenv').config(); // all the static configs to the already existed module called process
                            // it will be accessible process.env.name, e.g. process.env.PORT    
const app = express();

// for serving files
const path = require("path");

// response with status code
app.get("/home", function(req, res){
    res.status(200).send("Home working fine");
});
// serving dynamic files
// to access, we use like localhost:3000/filename ( the filename is a file inside the public folder)
app.use(express.static(path.join(__dirname, "public")))
// to give them specific starting path for all files that are in the same folder

app.use("/pages", express.static(path.join(__dirname, "public"))); // we call this middleware
// localhost:3000/pages/index.html



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