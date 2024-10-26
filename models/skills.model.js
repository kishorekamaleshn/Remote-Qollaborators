const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const Skill = sequelize.define('Skill', {
    skill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Skill;