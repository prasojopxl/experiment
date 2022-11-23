const { User } = require("../../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
    const { body } = req;

    if (!body.email || !body.password)
        return res.status(400).json({
            message: "email and password not valid",
        });

    // check email
    const user = await User.findOne({
        where: {
            email: body.email,
        },
    });

    if (!user)
        return res.status(400).json({
            message: "email belum terdaftar",
        });

    // check password
    const isPasswordCorrect = bcrypt.compareSync(body.password, user.password);

    if (!isPasswordCorrect)
        return res.status(400).json({
            message: "wrong password",
        });

    const data = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    const token = jwt.sign({ data }, "123456", {
        expiresIn: "10s",
    });
    return res.json({ token });
};
