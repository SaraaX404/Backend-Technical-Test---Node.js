const express = require('express')
require('dotenv').config()
const app = express()


//middlewares
app.use(express.json())


//listen
app.listen(process.env.PORT || 4000, ()=>{
    console.log(`App is running on port : ${process.env.PORT || 4000} `)
})
