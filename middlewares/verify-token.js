const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token)
        return res.status(403).json({
            message: "Forbiden Access",
        });
    const JWTToken = token.split(" ").pop();

    try {
        // verify token
        const data = jwt.verify(JWTToken, "123456");
        const user = await User.findByPk(data.data.id);
        if (!user)
            return res.status(400).json({
                message: "User not found",
            });
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({
            message: "Incorrect Credential",
        });
    }
};
