const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const tenantSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    aadhar:{
        type:String,
        required:true
    },
    pan:{
        type:String,
        required:true
    },
    room:{
        type:Schema.Types.ObjectId
    }
})
//model
const Tenant=mongoose.model('Tenant',tenantSchema)
module.exports=Tenant