const express = require('express');
const { userLogin } = require('../controllers/userController');

const router = express.Router();


router.post('/', userLogin); // login


module.exports = router;
