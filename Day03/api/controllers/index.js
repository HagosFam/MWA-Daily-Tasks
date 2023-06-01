const express = require("express");
const path = require("path");

module.exports.replyGetJson= function(req,res){
    // but again, we can split the functions as controller, in controllers folder
    console.log("sending json data in second way");
  res.status(200).json({"json data":"get method"});
}

module.exports.replyPostJson = function(req, res){
    console.log("POST a json request here");
    res.status(200).json({"json data":"post method"});
}