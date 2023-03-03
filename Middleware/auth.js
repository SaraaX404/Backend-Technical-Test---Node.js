const jwt  = require('jsonwebtoken')

module.exports = async (req,res,next)=>{

    const token = req.cookies.token
    console.log(token)
    if(token == null){
       return res.status(401).send({message:'token is not provided'})
    }

    try {
       const data = await jwt.verify(token, process.env.JWT_SECRET)
        req.user = data
        next()
    }catch (e) {
        res.status(401).send({message:"token is invalid"})
    }

}
