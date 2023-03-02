const CustomerModel = require('../../Models/Customer')

exports.create = async(req,res) =>{

    try {

        const customer = await CustomerModel.create(req.body)
        res.status(200).send({message:'customer created successfully', data:customer})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}



exports.get = async(req,res) =>{

    try {

        const customer = await CustomerModel.find({deleted:false})
        res.status(200).send({ data:customer})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

exports.deleteCustomer = async(req,res) =>{


    const id = req.params.id

    try {

        await CustomerModel.findByIdAndDelete(id)
        res.status(200).send({ message:'successfully deleted permanently'})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

exports.softDelete = async(req,res) =>{


    const id = req.params.id

    try {

        await CustomerModel.findByIdAndUpdate(id, {deleted:true}, {runValidators:true})
        res.status(200).send({ message:'successfully deleted'})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

exports.update = async (req,res)=>{
    const id = req.params.id
    const obj = {
        name:req.body.name, age:req.body.age, email:req.body.email, contactNumber:req.body.contactNumber
    }
    try {

        const customer =  CustomerModel.findByIdAndUpdate(id, obj, {runValidators:true, new:true})
        res.status(200).send({ message:'successfully updated customer', data:customer})

    }catch (e) {
        res.status(500).send({message:'internal server error', error:e.message})
    }
}
