var express = require("express");
const verifyToken = require("../middlewares/verify-token");
const admin = require("../middlewares/admin");
var router = express.Router();
const userHandler = require("./handlers/user");
const userIdHandler = require("./handlers/user/id");

/* GET All Data Users. */
router
    .route("/")
    .get(verifyToken, admin, userHandler.get)
    .post(verifyToken, admin, userHandler.post);
/* GET User By ID */
router
    .route("/:userId")
    .get(verifyToken, userIdHandler.get)
    .put(verifyToken, userIdHandler.put)
    .delete(verifyToken, userIdHandler.delete);

module.exports = router;
