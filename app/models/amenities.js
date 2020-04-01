const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const amenitiesSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})
//model
const Amenities=mongoose.model('Tenant',amenitiesSchema)
module.exports=Amenities