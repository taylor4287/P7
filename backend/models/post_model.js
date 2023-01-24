const Sequelize = require('sequelize');
const sequelize = require('../app');

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        // look these up
        id: {
            type: sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: sequelize.STRING,
            allowNull: false,
        },
        images: {
            type: sequelize.STRING,
            allowNull: false,
        },
        date: {
            type: sequelize.DATE,
            allowNull: false,
        },
        title: {
            type: sequelize.STRING,
            allowNull: false,
        },
        message: {
            type: sequelize.STRING,
            allowNull: false,
        },
        usersRead: {
            type: sequelize.ARRAY(Sequelize.TEXT),
            allowNull: true,
        }
    });
    return Post;
}