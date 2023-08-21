const mongoose=require("mongoose")

const doctorSchema=mongoose.Schema({
    name:String,
    image:String,
    specialization:String,
    experience:Number,
    location:String,
    date:String,
    slotes:String,
    fee:Number

},{
    versionKey:false
})


const Doctormodle=mongoose.model("doctor",doctorSchema)


module.exports={Doctormodle}