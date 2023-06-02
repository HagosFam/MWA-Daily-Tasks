const controllers = require("../controllers/index");

const router = require("express").Router();

router.route("/getJson")
.get(controllers.getJson)
.post(controllers.postJson);

module.exports = router;
