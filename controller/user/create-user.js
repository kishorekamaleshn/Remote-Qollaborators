const { constants } = require('../../utils/get-constants');
const userDao = require('../../dao/user.dao');

module.exports.createUserRecord = async (req, res, next) => {
    try {
        const userData = {
            name: req.body.userName,
            email: req.body.email,
            role: req.body.role,
            years_of_experience: req.body.yoe
        }
        const userRecord = await userDao.createUser(userData);
        return res.status(constants.HTTP_STATUS_200).send({ "message": "User Created", data: userRecord });
    } catch (error) {
        console.log(error);
        return res.status(constants.HTTP_STATUS_500).send({ "message": "Internal Server Error" });
    }
}