/* owners, managers and cashiers can continue through this middleware*/


module.exports = (req,res,next) =>{


    if(req.user.role == 'owner'){
        next()
    }else if(req.user.role == 'manager'){
        next()
    }else if(req.user.role == 'cashier'){
        next()
    }else{
        res.status(401).send({message:'the provided role is not valid'})
    }




}
