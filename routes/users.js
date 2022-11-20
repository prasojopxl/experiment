var express = require('express');
var router = express.Router();
const userHandler = require("./handlers/user")
const userIdHandler = require("./handlers/user/id")

/* GET All Data Users. */
router.get("/",userHandler.get)
/* GET User By ID */
router.get("/:userId",userIdHandler.get)

/* PUT DATA USER */
router.put("/:userId",userIdHandler.put)

// Create Data Users
router.post("/",userHandler.post)

// Delete Data Users
router.delete("/:userId",userIdHandler.delete)


module.exports = router;
