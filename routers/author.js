const express = require("express")

const router = express.Router()

router.get("/test",()=>{
    console.log("estamos dentro del test")
})

module.exports = router
