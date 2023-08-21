const express = require("express")
const {connection} = require("./db")
const {userRouter}=require("./routes/user.router")
const {doctorRouter} =require("./routes/doctor.router")
// console.log(userRouter)
const app = express()

app.use(express.json())


app.use("/user",userRouter)

app.use("/doctor",doctorRouter)


app.listen(8080, async () => {
    try {
        await connection;
        console.log("DB is connected")

    } catch (error) {
        console.log(error)
    }
})



