const { constants } = require('../../utils/get-constants');
const projectDao = require('../../dao/project.dao');
const userEnagagementDao = require('../../dao/user_enagement.dao');

module.exports.getAllProjects = async (req, res, next) => {
    try {
        const projects = projectDao.getAllProjects();
        return res.status(constants.HTTP_STATUS_200).send({ "data": projects });
    } catch (error) {
        console.log(error);
        return res.status(constants.HTTP_STATUS_500).send({ "message": "Internal Server Error" });
    }
}

module.exports.getAllAsscociateProjects = async (req, res, next) => {
    try {
        const projects = userEnagagementDao.getAllUserProjects(req.params.userId);
        return res.status(constants.HTTP_STATUS_200).send({ "data": projects });
    } catch (error) {
        console.log(error);
        return res.status(constants.HTTP_STATUS_500).send({ "message": "Internal Server Error" });
    }
}