const {User} = require("../../../models")

module.exports= async (req,res)=> {
    const body = req.body;
  
    if(!body.name || !body.email || !body.role) return res.status(400).json({message:"field not complete"});
  
    const user = await User.create (body)
    return res.json(user)
  }  