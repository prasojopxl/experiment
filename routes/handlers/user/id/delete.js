const {User} = require("../../../../models")

module.exports = async(req,res)=> {
    const {userId} = req.params;
    const data = await User.findByPk(userId)
    if(!data) return res.status(404).json({
        message:"User Not Found"
    })

    await data.destroy()

    return res.json({
        "message":"User ID "+userId+ " deleted"
    })
}