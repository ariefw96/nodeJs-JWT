const db = require('../config/mySQL')
const jsonwebtoken = require('jsonwebtoken')


module.exports = {
    authLogin : (body) => {
        return new Promise ((resolve, reject) =>{
            const queryString = "SELECT * FROM admin WHERE username = ? AND password = ?"
            db.query(queryString,[body.username, body.password], (err, data) =>{
                if(!err){
                    if(data.length > 0 ){
                        const payload = {
                            id: data[0].id,
                            username:data[0].username,
                            isLogin:true
                        }
                        const jwt = jsonwebtoken.sign(payload, process.env.SECRET_KEY, {expiresIn: 3600*1000})
                        resolve({
                            status:200,
                            message:"Sukses Login.",
                            data:jwt
                        })
                    }else{
                        reject({
                            status:404,
                            message:"Login failed",
                            data:null
                        })
                    }
                }else{
                    reject({
                        status:500,
                        message:'INTERNAL SERVER ERROR!',
                        data:err
                    })
                }
            })
        })
    } 
}