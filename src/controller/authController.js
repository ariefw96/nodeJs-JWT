const authModel = require('../model/authModel')

module.exports = {
    authLogin: (req, res) => {
        const body = req.body
        authModel.authLogin(body)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}