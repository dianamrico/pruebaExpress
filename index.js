const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const authorRoutes = require("./routers/author")

const app = express()
const port = 3006
app.set("port",port)


app.use("api/",authorRoutes)

app.get("/",(req,res)=>{
    res.send("hola mundo")
})

app.listen(port,()=>{
    console.log(`Intro app escuchando el puerto ${port}`)
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log("Base de datos conectada"))
.catch((err)=> console.log(err.message))