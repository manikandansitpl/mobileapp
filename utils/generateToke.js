const jwt = require('jsonwebtoken')

const tokengenerate=(id)=>{
 const secret = "mani1223"
    return jwt.sign({id},{secret},{expiresIn:"30d"})
}

module.exports = tokengenerate