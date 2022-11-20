const {User} = require("../../../models")

/* GET All Data Users. */
module.exports = async (req,res)=> {
    const users = await User.findAll()
    return res.json(users)
  }

