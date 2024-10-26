const sequelize = require('../database/sql-db');
const models = {
    User: require('./users.model'),
    Skill: require('./skills.model'),
    UserSkill: require('./user_skill.model'),
    Project: require('./project.model'),
    Document: require('./document.model'),
    ProjectResource: require('./project_resource.model'),
    Task: require('./task.model'),
    TaskAssignment: require('./task_assignment.model'),
    Milestone: require('./milestone.model')
};

// Define associations
models.User.belongsToMany(models.Skill, { through: models.UserSkill, foreignKey: 'user_id' });
models.Skill.belongsToMany(models.User, { through: models.UserSkill, foreignKey: 'skill_id' });

models.User.hasMany(models.Project, { foreignKey: 'manager_id' });
models.Project.belongsTo(models.User, { foreignKey: 'manager_id' });

models.Project.hasMany(models.Document, { foreignKey: 'project_id' });
models.Document.belongsTo(models.Project, { foreignKey: 'project_id' });

models.Project.hasMany(models.ProjectResource, { foreignKey: 'project_id' });
models.ProjectResource.belongsTo(models.Project, { foreignKey: 'project_id' });
models.User.hasMany(models.ProjectResource, { foreignKey: 'user_id' });
models.ProjectResource.belongsTo(models.User, { foreignKey: 'user_id' });

models.Project.hasMany(models.Task, { foreignKey: 'project_id' });
models.Task.belongsTo(models.Project, { foreignKey: 'project_id' });
models.Task.belongsTo(models.Task, { as: 'ParentTask', foreignKey: 'parent_task_id' });
models.Task.hasMany(models.Task, { as: 'SubTasks', foreignKey: 'parent_task_id' });

models.Task.hasMany(models.TaskAssignment, { foreignKey: 'task_id' });
models.TaskAssignment.belongsTo(models.Task, { foreignKey: 'task_id' });
models.User.hasMany(models.TaskAssignment, { foreignKey: 'user_id' });
models.TaskAssignment.belongsTo(models.User, { foreignKey: 'user_id' });

models.Project.hasMany(models.Milestone, { foreignKey: 'project_id' });
models.Milestone.belongsTo(models.Project, { foreignKey: 'project_id' });
models.Milestone.hasMany(models.Task, { foreignKey: 'milestone_id' });
models.Task.belongsTo(models.Milestone, { foreignKey: 'milestone_id' });


const project = [
    {
        project_id: 1,
        user_id: 2,
        start_date: new Date("2024-03-25"),
        end_date: new Date("2024-04-25"),
        allocation_percentage: 100,
        role: 'software developer'
    },
    {
        project_id: 1,
        user_id: 7,
        start_date: new Date("2024-03-25"),
        end_date: new Date("2024-04-25"),
        allocation_percentage: 100,
        role: 'data engineer'
    },
    {
        project_id: 1,
        user_id: 8,
        start_date: new Date("2024-03-25"),
        end_date: new Date("2024-04-25"),
        allocation_percentage: 100,
        role: 'data engineer'
    },
    {
        project_id: 2,
        user_id: 3,
        start_date: new Date("2024-10-20"),
        end_date: new Date("2024-11-20"),
        allocation_percentage: 100,
        role: 'framework engineer'
    },
    {
        project_id: 2,
        user_id: 7,
        start_date: new Date("2024-03-25"),
        end_date: new Date("2024-04-25"),
        allocation_percentage: 100,
        role: 'data engineer'
    },
    {
        project_id: 2,
        user_id: 15,
        start_date: new Date("2024-10-20"),
        end_date: new Date("2024-11-20"),
        allocation_percentage: 100,
        role: 'architect sd'
    },
    {
        project_id: 2,
        user_id: 19,
        start_date: new Date("2024-10-20"),
        end_date: new Date("2024-11-20"),
        allocation_percentage: 100,
        role: 'tester'
    }
]

// project.map(data => models.ProjectResource.create(data));

async function syncModels() {
    try {
        await sequelize.sync({ force: false, alter: true });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { syncModels };