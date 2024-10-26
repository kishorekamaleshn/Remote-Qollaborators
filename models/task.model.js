const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('Task', {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    milestone_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'TODO',
        values: ['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED']
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3,
        validate: {
            min: 1,
            max: 3
        }
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estimated_hours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parent_task_id: {
        type: DataTypes.INTEGER
    }
});

module.exports = Task;