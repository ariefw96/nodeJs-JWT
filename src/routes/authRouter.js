const express = require('express')
const authRouter = express.Router()

const loginController = require('../controller/authController')

authRouter.post('/login', loginController.authLogin)

module.exports = authRouter;
