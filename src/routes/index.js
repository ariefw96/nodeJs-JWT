const express = require('express')
const mainRouter = express.Router()


const homeRouter = require('./homeRouter')
const loginRouter = require('./authRouter')
const notfoundRouter = require('./404router')
const userRouter = require('./userRouter')


mainRouter.use('/api/v2/', homeRouter)
mainRouter.use('/api/v2/auth', loginRouter)
mainRouter.use('/api/v2/user', userRouter)
mainRouter.use('/api/v2/', notfoundRouter)


module.exports = mainRouter;