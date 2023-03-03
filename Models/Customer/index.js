const mongoose = require("mongoose");

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const CustomerSchema = new mongoose.Schema({
    name:{
        type:'string', required:[true,'name is required']
    },
    age:{type:'number', required: [true,'age is required']},
    email:{
        type:'string', validate:[validateEmail, 'Please fill a valid email address']
    },
    contactNumber:{
        type:'number',maxLength:13, required:[true,'age is must required']
    },
    deleted:{
        type:'boolean', default: false
    }
})

module.exports = mongoose.model('customer', CustomerSchema)
