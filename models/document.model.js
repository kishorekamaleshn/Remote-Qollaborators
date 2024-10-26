const sequelize = require('../database/sql-db');
const { DataTypes } = require('sequelize');

const Document = sequelize.define('Document', {
    document_id: {
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
    type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['SOW', 'REQUIREMENTS', 'DESIGN', 'OTHER']
    },
    // Option 1: Store directly in DB
    file_content: {
        type: DataTypes.BLOB('long'),  // For binary files like PDFs
        allowNull: true
    },
    text_content: {
        type: DataTypes.TEXT('long'),  // For text files
        allowNull: true
    }
});

module.exports = Document;