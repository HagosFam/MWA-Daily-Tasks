const express = require("express");
const router = express.Router();

// import the implementation 
const getImplementations = require("../controllers")

// initial way to do
router.get("/json", function(req, res){
    res.status(200).send("Sending this data");
})


// better way to expose APIs 
// we can use all post, get, delete any other http method in one route
// check them in postman or any other client plugin
router.route("/json2")
.get(getImplementations.replyGetJson)  // we can also write the get function implementaiton here 
.post(getImplementations.replyPostJson) // we can also write the post function implementation here 
.delete(function(req,res){
    console.log("deleting something here, consider as something changed")
    res.status(200).send("Pretending to work- pretend you are sending file dear api fara")
})
module.exports = router;