require('dotenv').config();
const db = require('./src/config/mySQL')
const express = require('express');
const logger = require("morgan");
const mainRouter = require('./src/routes/index')
const app = express();
const port = process.env.PORT || 8000;
const http = require('http');
const server = http.createServer(app)


server.listen(port, () => console.log("server running on port:" + port));

app.use(
    express.urlencoded({
        extended:false
    })
)

app.use(
    express.json()
)

app.use('/', mainRouter)

module.exports = app;

