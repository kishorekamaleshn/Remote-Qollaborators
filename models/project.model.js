const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const Project = sequelize.define('Project', {
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'DRAFT',
        values: ['DRAFT', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED']
    },
    tech_stack: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Project;