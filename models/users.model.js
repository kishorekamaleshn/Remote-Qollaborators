const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'EMPLOYEE',
        values: ['ADMIN', 'MANAGER', 'EMPLOYEE']
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = User;