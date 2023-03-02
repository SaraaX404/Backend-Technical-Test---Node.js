const mongoose = require('mongoose')


const MedicationSchema = new mongoose.Schema({
    name:{
        type:'string', required:[true,'name is required']
    },
    description:{
        type:'string', required: [true, 'description is required']
    },
    quantity:{
        type:'number', default:0
    },
    deleted:{
        type:'boolean', default: false
    }
})

module.exports = mongoose.model( 'medication',MedicationSchema)
