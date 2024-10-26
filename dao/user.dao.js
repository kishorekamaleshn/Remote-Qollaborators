const Users = require('../models/users.model');

exports.createUser = async (user) => {
    try {
        const newUser = await Users.create(user);
        return newUser;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

exports.getUserByEmail = async (attribute) => {
    try {
        const newUser = await Users.findOne({ where: { email: attribute } });
        return newUser;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

