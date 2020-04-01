const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const buildingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    buildingType:{
        type:String,
        enum:['male','female','co-ed'],
        required:true
    },
    location:{
        lat:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
})
//model
const Building=mongoose.model('Building',buildingSchema)
module.exports=Building