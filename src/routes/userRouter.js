const express = require('express');
const middleware = require('./../middleware/checkToken')
const userRouter = express.Router();
const userController = require('./../controller/userController')

userRouter.post("/addNewUser", middleware.checkJwt, userController.addNewUser )
userRouter.get("/getAllUser", userController.getAllUser)
userRouter.get("/getUser/:id", userController.getUserById)
userRouter.patch("/updateUser/:id", middleware.checkJwt, userController.updateUser)
userRouter.delete("/deleteUser/:id", middleware.checkJwt, userController.deleteUser)


module.exports = userRouter;