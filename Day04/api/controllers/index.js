
const getJson =function(req, res) {
    console.log("Getting json from an API");
    res.status(200).json({"Info":"You are getting right response"});
}


const postJson =function(req, res) {
    console.log("Posting json from an API");
    res.status(200).json({"Info":"You are posting right information"});
}

module.exports = {getJson, postJson};


