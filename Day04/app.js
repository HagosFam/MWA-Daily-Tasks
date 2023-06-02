require("dotenv").config();
const routes = require("./api/routes/index")
const express = require("express");
const app = express();

app.use("/api", routes);

app.listen(process.env.PORT, function(){
    console.log("Server is running at ", process.env.PORT)
})

