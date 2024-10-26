const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const Milestone = sequelize.define('Milestone', {
    milestone_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'PENDING',
        values: ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'DELAYED']
    }
});

module.exports = Milestone;