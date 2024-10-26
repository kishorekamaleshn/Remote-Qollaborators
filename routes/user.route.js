//Creating express router file
const express = require('express');
const router = express.Router();


router.post('/login-user', require('../controller/user/login-user').getUserRecord);

router.post('/create-user', require('../controller/user/create-user').createUserRecord);

module.exports = router;