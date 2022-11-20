const {User} = require("../../../../models")

module.exports = async (req,res) => {
    const {userId} = req.params;
    const data = await User.findByPk(userId)
    if (!data) return res.status(404).json({
        message:"user not found"
    });
    await data.update(req.body);
    return res.json({
        data
    })
}