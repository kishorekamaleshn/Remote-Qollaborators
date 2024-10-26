//Creating express router file
const express = require('express');
const router = express.Router();

router.post('/get-projects', require('../controller/project/get-project').getAllProjects);
router.post('/get-project/:userId', require('../controller/project/get-project').getAllAsscociateProjects);
router.post('/create-project', require('../controller/project/create-project').createProjectRecord);

module.exports = router;