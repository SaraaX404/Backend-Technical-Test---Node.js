const jwt  = require('jsonwebtoken')

module.exports = async (req,res,next)=>{


    //get the token from cookies
    const token = req.cookies.token

    //check if the token exits
    if(token == null){
       return res.status(401).send({message:'token is not provided'})
    }

    //verify the token using jwt
    try {
       const data = await jwt.verify(token, process.env.JWT_SECRET)
        // set decoded value to request
        req.user = data
        //continue the process
        next()
    }catch (e) {
        // id toke is invalid send unauthorized message
        res.status(401).send({message:"token is invalid"})
    }

}
