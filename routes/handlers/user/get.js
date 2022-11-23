const { User } = require("../../../models");

/* GET All Data Users. */
module.exports = async (req, res) => {
    const users = await User.findAll({
        attributes: {
            exclude: ["password"],
        },
    });
    return res.json(users);
};
