const express = require("express")

const app = express()
const port = 3005
app.set("port",port)

app.get("/",(req,res)=>{
    res.send("hola mundo")
})

app.listen(port,()=>{
    console.log(`Intro app escuchando el puerto ${port}`)
})