require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

// importing the routes

const routes = require("./api/routes")

app.use("/api", routes);

app.get("/", function(req,res){
   console.log("JSON file served");
   res.status(200).send("{'message': 'Working fine'}, {'status code' :200}"); // serving json data

   res.status(200).send("Sending just data"); // serving just data

   // to serve file 
   res.status(200).sendFile(path.join(__dirname, "app01.js")); // serving file
})


// logging requests 
app.use(function(req, res) {
    console.log(req.method, req.url);
});

//Middleware for only paths starting with "css"
app.use("/css", function(req, res, next) {
console.log(req.method, req.url);
next();
});


//app.use(express.static(path.join(__dirname, "public"))); // localhost:3000/index.html, to acess a file inside public

app.use("/pages",express.static(path.join(__dirname,"public")));// localhost:3000/pages/index.html

const server = app.listen(process.env.PORT, function(){
    console.log(process.env.MSG_SERVER_START, server.address().port);
})

