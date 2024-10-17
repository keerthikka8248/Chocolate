const express = require("express")
const app = express()

const mongoose = require("mongoose")

const port = 5000

async function DBconnection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/chocolates")
        app.listen(port,function(){
            console.log(`DB Connected - Listening to port ${port}`)
        })
    }
    catch(error){
        console.log(error)
    }
}
DBconnection();
