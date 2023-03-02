const express = require('express')
const router = express.Router()
const {createUser, loginUser} = require('../../Controllers/UserController')

router.post('/Register',createUser)
router.post('/Login', loginUser )


module.exports = router
