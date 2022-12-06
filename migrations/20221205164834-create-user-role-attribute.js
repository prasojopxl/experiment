"use strict";

const { ENUM } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("users", "role", {
            type: Sequelize.ENUM,
            values: ["admin", "member"],
            defaultValue: "member",
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("users", "role");
    },
};
