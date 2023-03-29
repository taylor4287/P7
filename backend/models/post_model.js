const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

module.exports = sequelize.define('post', {
    // look these up
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    images: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usersRead: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
    }
});