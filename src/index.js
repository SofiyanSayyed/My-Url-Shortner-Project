const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/router')
const app = express()
require('dotenv').config()
const {MONGO_STRING, PORT} = process.env


app.use(express.json())

app.use("/", route)
mongoose.connect(MONGO_STRING, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("mongodb Connected successfully")
})
.catch(err => {
    console.log(err.message)
})



app.listen(PORT || 3000, function (){
    console.log("Server is started at port " + PORT||3000)
})