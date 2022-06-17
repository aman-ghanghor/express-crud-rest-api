import dotenv from "dotenv"
dotenv.config()

import express from "express" 
import userRoute from "./routes/userRoute.js"
import connectDB from "./db/connectdb.js"
const app = express() 
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL 


// JSON Middleware - body.req
app.use(express.json()) ;

// Database connection
connectDB(DATABASE_URL) ;

// Load Routes
app.use("/api/student", userRoute) ;


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})



