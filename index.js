const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const app = express()
const db = require('./Config/DB')
const auth = require('./Middleware/auth')
const userRouter = require('./Routes/UserRoutes')
const mediRouter = require('./Routes/MediRoutes')
const customerRouter = require('./Routes/CustomerRoutes')
const morgan = require('morgan')
const prefix = '/api/v1'

//middlewares
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser())
app.use(`${prefix}/users`, userRouter)
 app.use(`${prefix}/medications`,auth, mediRouter)
app.use(`${prefix}/customers`,auth, customerRouter )
//listen
app.listen(process.env.PORT || 4000, async ()=>{
    try {
        await db()
        console.log(`App is running on port : ${process.env.PORT || 4000} `)
    }catch (e) {
        console.log(e)
    }

})
