const mongoose=require('mongoose')
//schema
const Schema=mongoose.Schema
const roomSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    occupancy:{
        type:String,
        enum:['2sharing,3sharing,4sharing'],
        required:true
    },
    price:{
        type:String,
        required:true
    },
    building:{
        type:Schema.Types.ObjectId
    }
})
//model
const Room=mongoose.model('Room',roomSchema)
module.exports=Room