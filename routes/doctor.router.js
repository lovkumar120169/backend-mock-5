const express=require("express")
const {Doctormodle}=require("../model/doctor.modle")


const doctorRouter=express.Router()




doctorRouter.get("/",async(req,res)=>{
    try {
        const all_Doctor=await Doctormodle.find()
        res.status(200).json({data:all_Doctor})
    } catch (error) {
        res.status(400).json({error:error})
    }
})

doctorRouter.post("/appointments",async(req,res)=>{
    try {
        const doctor=new Doctormodle(req.body)
        await doctor.save()
        res.status(200).json({msg:"Doctor Successfully Added"})
    } catch (error) {
        res.status(400).json({error:error})
    }
})

doctorRouter.delete("/appointments/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const delDoctor=await Doctormodle.findOneAndDelete({_id:id})
        res.status(200).json({msg:"Successfully Deleted",data,delDoctor})
    } catch (error) {
        res.status(400).json({error:error})
    }
})


doctorRouter.patch("/appointments/update/:id",async(req,res)=>{
    const {name,image,specialization,experience,location,date,slots,fee}=req.body
    const {id}=req.params
    console.log(id)
    console.log(req.body)
    try {
        const upDate=await Doctormodle.findOneAndUpdate({_id: id}, {name:name},{image:image},{specialization:specialization},{experience:experience},{location:location},{date:date},{slots:slots},{fee:fee})
        res.status(200).json({msg:"Successfully Updated",data:upDate})
    } catch (error) {
        res.status(400).json({error:error})
    }
})


doctorRouter.get("/appointments/filter",async(req,res)=>{
    const {filterele}=req.query
    try {
        const filterData=await Doctormodle.find({specialization:filterele})
        res.status(200).json({msg:"Data filter successfull",data:filterData})
    } catch (error) {
        
    }
})

module.exports={doctorRouter}


