const Project = require('../models/project.model');
const ProjectResource = require('../models/project_resource.model');
const User = require('../models/users.model');
const { Op } = require('sequelize');

exports.createProject = async (project) => {
    try {
        const projectRecord = await Project.create(project)
        return projectRecord;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

exports.getAllProjects = async () => {
    try {
        const projects = await Project.findAll();
        return projects;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

exports.findAvailableUsers = async () => {
    try {
        const today = new Date();

        const projectUsers = await ProjectResource.findAll({
            attributes: ['user_id'],
            where: {
                end_date: {
                    [Op.gte]: today
                }
            },
            group: ['user_id']
        });

        const projectUserIds = projectUsers.map(projectUser => projectUser.user_id);

        const availableUsers = await User.findAll({
            where: {
                user_id: {
                    [Op.notIn]: projectUserIds
                }
            }
        });
        return availableUsers;
    } catch (err) {
        console.log(err);
        throw err;
    }
}