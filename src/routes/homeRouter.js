const express = require('express')
const homeRouter = express.Router()


homeRouter.get('/',(req, res) =>{
    res.send("API LOADED")
})


module.exports = homeRouter;