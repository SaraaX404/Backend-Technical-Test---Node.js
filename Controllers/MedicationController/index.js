const MediModel = require('../../Models/Medications')


/*************************/
/**** create medication ****/
/*************************/
exports.create = async(req,res) =>{

    try {

        const medi = await MediModel.create(req.body)
        res.status(200).send({message:'medication created successfully', data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

/*************************/
/**** get medication ****/
/*************************/

exports.get = async(req,res) =>{

    try {

        const medi = await MediModel.find({deleted:false})
        res.status(200).send({ data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

/*************************/
/**** get medication by id ****/
/*************************/

exports.getById = async(req,res) =>{


    const id = req.params.id

    try {

        const medi = await MediModel.findOne({_id:id,deleted:false})
        if(medi == null){
            return res.status(404).send({message:`there are no medication belongs to this id:${id}`})
        }
        res.status(200).send({ data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

/*************************/
/**** delete medication ****/
/*************************/

exports.deleteMedi = async(req,res) =>{


    const id = req.params.id

    try {

        const medi = await MediModel.findByIdAndDelete(id)
        if(medi === null){
            return res.status(404).send({message:`there are no medications found belong to this id: ${id}`})
        }
        res.status(200).send({ message:'successfully deleted permanently'})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

/*************************/
/**** soft delete medication ****/
/*************************/

exports.softDelete = async(req,res) =>{


    const id = req.params.id

    try {

        const medi = await MediModel.findByIdAndUpdate(id, {deleted:true}, {runValidators:true})
        if(medi === null){
            return res.status(404).send({message:`there are no medications found belong to this id: ${id}`})
        }
        res.status(200).send({ message:'successfully deleted'})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }


}

/*************************/
/**** update medication ****/
/*************************/

exports.update = async (req,res)=>{
    const id = req.params.id
    const obj = {}

    if(req.body.name){
        obj.name = req.body.name
    }

    if(req.body.description){
        obj.description = req.body.description
    }

    if(req.body.quantity){
        obj.quantity = req.body.quantity
    }

    try {

        const medi = await MediModel.findByIdAndUpdate(id, obj, {runValidators:true, new:true})
        if(medi === null){
            return res.status(404).send({message:`there are no medications found belong to this id: ${id}`})
        }
        res.status(200).send({ message:'successfully updated medication', data:medi})

    }catch (e) {

        res.status(500).send({message:'internal server error', error:e.message})

    }
}

