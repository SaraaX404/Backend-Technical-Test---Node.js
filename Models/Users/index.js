const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name:{
        type:'string', required:[true,'name is required']
    },
    role:{
        type:'string', enum:['owner', 'manager', 'cashier'], required: [true, "role is required"]
    },
    username:{
        type:'string', required:true
    },
    password:{
        type:'string', required:false
    }


})

UserSchema.pre("save", function(){
    this.password = bcrypt.hashSync(this.password, 8)
})

UserSchema.methods.checkPassword = function (password){
    if(bcrypt.compare(this.password,password)){
        return true
    }else{
        return false
    }
}

module.exports = mongoose.model('User', UserSchema)
