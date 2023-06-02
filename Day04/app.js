require("dotenv").config();
require("./api/data/dbconnection").open();
const routes = require("./api/routes/index")
const express = require("express");
const app = express();

// calling the database connection


app.use("/api", routes);

app.listen(process.env.PORT, function(){
    console.log("Server is running at ", process.env.PORT)
})

