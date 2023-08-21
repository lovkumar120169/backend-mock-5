const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:String,
    password:String,
    Confirm_Password:String,
},{
    versionKey:false
})


const Usermodel=mongoose.model("user",userSchema)


module.exports={Usermodel}