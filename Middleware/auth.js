const jwt  = require('jsonwebtoken')

module.exports = (req,res,next)=>{

    const token = req.cookies.token

    if(token == null){
        res.status(401).send({message:'token is not provided'})
    }

    try {
       const data =  jwt.verify(token, process.env.JWT_SECRET)
        req.user = data
        next()
    }catch (e) {
        res.status(401).send({message:"token is invalid"})
    }





}
