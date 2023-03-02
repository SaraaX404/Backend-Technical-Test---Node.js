const UserModel = require('../../Models/Users')
const jwt = require('jsonwebtoken')

exports.createUser = async (req,res) =>{

    try {
        const user = await UserModel.create(req.body)
        res.status(200).send({message:"user created successfully", data:user})
    }catch (e) {
        res.status(500).send({message:"internal server error", error:e.message})
    }



}

exports.loginUser = async (req,res) =>{
    try {

        //get username and password from body
        const {username,password} = req.body
        //check if the username is null
        if(username == null ){
            return res.status(401).send({message:"username is empty"})
        }
        //check if the password is null
        if(password == null ){
            return res.status(401).send({message:"password is empty"})
        }

        //get user using username
        const user = await UserModel.findOne({username:username})

        //check the user is exists
        if(user == null){
            return res.status(401).send({message:"username cannot be found"})
        }
        //check the password is correct
        if(user.checkPassword(password)){
            //sign a token using role and user id
            const token = jwt.sign({userId:user._id, role:user.role}, process.env.JWT_SECRET, {}, {} )
            //set toke to a cookie
            res.cookie('token', token)
            res.status(200).send({message:"logged in success"})
        }else{
            res.status(401).send({message:"incorrect password"})
        }
    }catch (e){
        res.status(500).send({message:"internal server error", error:e.message})
    }
}
