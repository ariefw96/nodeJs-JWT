const jsonwebtoken = require('jsonwebtoken')

module.exports = {
    checkJwt: (req, res, next) => {
        const token = req.header('token')
        if (!token) {
            res.status(401).json({
                status: 401,
                message: "Unauthorized Access"
            })
        } else {
            const resToken = token.split(' ')[1]
            try {
                jsonwebtoken.verify(resToken, process.env.SECRET_key)
                next()
            } catch (err) {
                res.status(401).json({
                    status:401,
                    error:err
                })
            }
        }
    }
}