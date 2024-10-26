const ProjectResource = require('../models/project_resource.model');
const { col } = require('sequelize');
const sequelize = require('../database/sql-db');

exports.getAllAvailableResources = async () => {
    try {
        const userEngagement = await ProjectResource.findAll({
            attributes: [
                'project_id',
                'user_id',
                'start_date',
                'end_date',
                [
                    sequelize.literal(`ROW_NUMBER() OVER(
                    PARTITION BY user_id
                    ORDER BY end_date DESC, start_date DESC
                  )`), 'row_num'
                ]
            ],
            order: [
                ['user_id', 'ASC'],
                ['end_date', 'DESC'],
                ['start_date', 'DESC']
            ],
            // Step 2: Include this subquery as a nested condition to only get rows with row_num = 1
            where: sequelize.where(sequelize.col('row_num'), 1)
        });
        return userEngagement;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


exports.getAllUserProjects = async (userId) => {
    try {
        const userProjectRecords = await ProjectResource.findAll({ where: userId, order: [['end_date', 'DESC']] });
        return userProjectRecords;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


