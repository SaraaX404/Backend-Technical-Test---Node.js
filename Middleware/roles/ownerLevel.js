/*only owners can continue through this middleware*/

module.exports = (req,res,next) =>{

    if(req.user.role == 'owner'){
        next()
    }else if(req.user.role == 'manager'){
        res.status(401).send({message:'only owners can do this task'})
    }else if(req.user.role == 'cashier'){
        res.status(401).send({message:'only owners can do this task'})
    }else{
        res.status(401).send({message:'the provided role is not valid'})
    }
}
