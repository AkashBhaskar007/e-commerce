const router = require('express').Router();
require('dotenv').config()


const {
    registerController,
    loginController
} = require('../modules/adminController');

//RegisterAdmin
router.post('/registerAdmin', registerController);
//LoginAdmin
router.post('/loginAdmin', loginController);

module.exports = router