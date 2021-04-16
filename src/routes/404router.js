const express = require('express')
const notfoundRouter = express.Router()

notfoundRouter.use('/', (req, res) =>{
    res.send({
        status:404,
        message:"404 NOT FOUND"
    })
})

module.exports = notfoundRouter;