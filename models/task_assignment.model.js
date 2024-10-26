const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const TaskAssignment = sequelize.define('TaskAssignment', {
    assignment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    assigned_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'ASSIGNED',
        values: ['ASSIGNED', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED']
    }
});

module.exports = TaskAssignment;