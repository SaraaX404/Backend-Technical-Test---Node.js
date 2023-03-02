const MediModel = require('../../Models/Medications')

exports.create = async(req,res) =>{

    try {

        const medi = await MediModel.create(req.body)
        res.status(200).send({message:'medication created successfully', data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}



exports.get = async(req,res) =>{

    try {

        const medi = await MediModel.find({deleted:false})
        res.status(200).send({ data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

exports.deleteMedi = async(req,res) =>{


    const id = req.params.id

    try {

        await MediModel.findByIdAndDelete(id)
        res.status(200).send({ message:'successfully deleted permanently'})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

exports.softDelete = async(req,res) =>{


    const id = req.params.id

    try {

        await MediModel.findByIdAndUpdate(id, {deleted:true}, {runValidators:true})
        res.status(200).send({ message:'successfully deleted'})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

exports.update = async (req,res)=>{
    const id = req.params.id
    const obj = {
        name:req.body.name, description:req.body.description, quantity:req.body.quantity
    }
    try {

       const medi =  MediModel.findByIdAndUpdate(id, obj, {runValidators:true, new:true})
        res.status(200).send({ message:'successfully updated medication', data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }
}

