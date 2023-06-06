const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/router')
const app = express()


app.use(express.json())

mongoose.connect("mongodb+srv://SofiyanSayyed:hsxRh6DS5ZlfI1Kj@cluster0.lnyemj3.mongodb.net/Sofiyan_1302", {
    useNewUrlParser: true,
})
.then(() => {
    console.log("mongodb Connected successfully")
})
.catch(err => {
    console.log(err.message)
})

app.use("/", route)


app.listen(PORT, function (){
    console.log("Server is started at port " + port)
})