const express = require("express")
const { Usermodel } = require("../model/user.post.model");
// const { model } = require("mongoose");




const userRouter = express.Router();



userRouter.post("/signup", async (req, res) => {
    try {
        const newUser = new Usermodel({ ...req.body })
        await newUser.save()
        res.status(200).json({ msg: "User Successfully Registered" })
    } catch (error) {
        res.status(400).json({ error: error })
    }
})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    // console.log(res.body)
    try {
        let user = await Usermodel.findOne({ email: email })
        if (user) {
            if (user.password == password) {
                res.status(200).json({ msg: "Login Successfull" })
            }
        } else {
            res.status(400).json({ msg: "Wrong Credentials" })
        }
    } catch (error) {
        res.status(400).json({ error: error })
    }
})



module.exports = { userRouter }