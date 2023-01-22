const Sequelize = require('sequelize');
const sequelize = require('../app')

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {	
		id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
    	},
		firstname: {
			type: Sequelize.STRING
		},
		lastname: {
			type: Sequelize.STRING
  		},
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.INTEGER
		},
		position: {
			type: Sequelize.STRING
		}
	});
	return User;
}