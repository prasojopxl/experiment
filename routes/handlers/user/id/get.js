const {User} = require("../../../../models")

module.exports = async (req,res)=> {
    const {userId} = req.params;
    const data = await User.findByPk(userId)
    if(!data) return res.status(400).json({
        message: "data not found"
    });
    return  res.json(data);
}