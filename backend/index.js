import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js"
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"
import cors from "cors"

const app=express()

app.use(cors())
app.use(express.json())

dotenv.config();
const PORT=process.env.PORT || 5001

// import connectDB from "./db/db.js"
connectDB()

//define route
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(5000,()=>{
    console.log(`server started on port ${PORT}`)
})