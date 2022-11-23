const { User } = require("../../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    const { body } = req;

    //validate input
    if (!body.name || !body.email || !body.password) {
        return res.status(400).json({
            message: "name, email and password must be provided",
        });
    }

    // check email has been used
    const isEmailUsed = await User.findOne({
        where: {
            email: body.email,
        },
    });

    if (isEmailUsed)
        return res.status(400).json({
            message: "email already to use",
        });

    const password = bcrypt.hashSync(body.password, 10);

    const user = await User.create({
        ...body,
        password,
    });

    return res.json({
        id: user.id,
        name: user.name,
    });
};
