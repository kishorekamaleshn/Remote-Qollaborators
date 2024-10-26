const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const UserSkill = sequelize.define('UserSkill', {
    user_skill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    skill_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    proficiency_level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = UserSkill;