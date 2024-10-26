const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const ProjectResource = sequelize.define('ProjectResource', {
    resource_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    allocation_percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 100
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ProjectResource;