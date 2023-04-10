const Sequelize = require("sequelize");
const sequelize = require("../config/db.config");

module.exports = sequelize.define("post", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mediaUrl: {
    type: Sequelize.STRING,
    allowNull: true,
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
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: true,
  },
});
