const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://luv:kumar@cluster0.e5ouqwp.mongodb.net/mockuser")

module.exports={connection}