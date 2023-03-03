const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const app = express()
const db = require('./Config/DB')
const auth = require('./Middleware/auth')
const userRouter = require('./Routes/UserRoutes')
const mediRouter = require('./Routes/MediRoutes')
const customerRouter = require('./Routes/CustomerRoutes')
//middlewares
app.use(express.json())
app.use(cookieParser())
app.use('/users', userRouter)
 app.use('/medications',auth, mediRouter)
app.use('/customers',auth, customerRouter )
//listen
app.listen(process.env.PORT || 4000, async ()=>{
    try {
        await db()
        console.log(`App is running on port : ${process.env.PORT || 4000} `)
    }catch (e) {
        console.log(e)
    }

})
