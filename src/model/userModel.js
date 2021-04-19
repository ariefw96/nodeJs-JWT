const db = require('./../config/mySQL')

module.exports = {
    addNewUser : (body) =>{
        return new Promise ((resolve, reject) =>{
            const queryString = "INSERT INTO user SET ?"
            db.query(queryString, body, (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        message:'Berhasil menambahkan data',
                        data:{
                            id:data.insertId,
                            ...body,
                            
                        }
                    })
                }else{
                    reject({
                        status:500,
                        message:"INTERNAL SERVER ERROR",
                        data:err
                    })
                }
            })
        })
    },
    getAllUser: () =>{
        return new Promise ((resolve ,reject) =>{
            const queryString = "SELECT * FROM user"
            db.query(queryString, (err, data) =>{
                if(!err){
                    if(data.length > 0){
                        resolve({
                            status:200,
                            message:"Berhasil mendapatkan data",
                            data
                        })
                    }else{
                        reject({
                            status:404,
                            message:"Data tidak ditemukan",
                            data:[]
                        })
                    }
                }else{
                    reject({
                        status:500,
                        message:"INTERNAL SERVER ERROR",
                        data:err
                    })
                }
            })
        })
    },
    getUserById : (id) =>{
        return new Promise ((resolve, reject) =>{
            const queryString = "SELECT * FROM user WHERE id = ? LIMIT 1 OFFSET 0"
            db.query(queryString,id, (err, data) =>{
                if(!err){
                    if(data.length > 0){
                        resolve({
                            status:200,
                            message:"Berhasil mendapatkan data",
                            data:data[0]
                        })
                    }else{
                        reject({
                            status:404,
                            message:"Data tidak ditemukan",
                            data:null
                        })
                    }
                }else{
                    reject({
                        status:500,
                        message:"INTERNAL SERVER ERROR",
                        data:err
                    })
                }
            })
        })
    },
    updateUser: (body, id) =>{
        return new Promise ((resolve, reject ) =>{
            const queryString = "UPDATE user SET ? WHERE id = ?"
            db.query(queryString,[body,id], (err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        message:"Data berhasil diubah pada ID "+id,
                        data:body
                    })
                }else{
                    reject({
                        status:500,
                        message:"INTERNAL SERVER ERROR",
                        data:err
                    })
                }
            })
        })
    },
    deleteUser : (id) =>{
        return new Promise((resolve ,reject) =>{
            const queryString = "DELETE FROM user WHERE id = ?"
            db.query(queryString,id,(err, data) =>{
                if(!err){
                    resolve({
                        status:200,
                        message:"Berhasil menghapus data pada ID "+id,
                    })
                }else{
                    reject({
                        status:500,
                        message:"INTERNAL SERVER ERROR",
                        data:err
                    })
                }
            })
        })
    }

}