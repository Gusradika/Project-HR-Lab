const express = require('express');
const router = express.Router();

//Import Controller
const userController = require('../controllers/UserController');
const employeeController = require('../controllers/EmployeeController');
const adminController = require('../controllers/AdminController');

//* Route *//
// login
router.post('/login', userController.loginUser);

// logout
router.post('/logout', userController.logoutUser);

// test data 
router.get('/', employeeController.getEmployees); 

// registrasi user
router.post('/register', userController.createUser);

// verifiy akun
router.put('/employee/:nip/verify', adminController.verifyUser);


module.exports = router;