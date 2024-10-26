const { constants } = require('../../utils/get-constants');
const userDao = require('../../dao/user.dao');

module.exports.getUserRecord = async (req, res, next) => {
    try {
        const email = req.body.username;
        const userRecord = await userDao.getUserByEmail(email);
        if(userRecord){
            return res.status(constants.HTTP_STATUS_200).send({ "message": "User Details", data: userRecord });
        }else{
            return res.status(constants.HTTP_STATUS_401).send({ "message": "Unauthorized Access" });
        }
    } catch (error) {
        console.log(error);
        return res.status(constants.HTTP_STATUS_500).send({ "message": "Internal Server Error" });
    }
}