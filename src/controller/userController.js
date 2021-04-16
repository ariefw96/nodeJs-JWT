const userModel = require('./../model/userModel')

module.exports = {
    addNewUser: (req, res) => {
        const { body } = req
        userModel.addNewUser(body)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getAllUser: (req, res) => {
        userModel.getAllUser()
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    getUserById: (req, res) => {
        const { id } = req.params
        userModel.getUserById(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    updateUser: (req, res) => {
        const { body } = req
        const { id } = req.params
        userModel.updateUser(body, id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    },
    deleteUser: (req, res) => {
        const { id } = req.params
        userModel.deleteUser(id)
            .then((result) => {
                res.status(result.status).json(result)
            }).catch((error) => {
                res.status(error.status).json(error)
            })
    }
}