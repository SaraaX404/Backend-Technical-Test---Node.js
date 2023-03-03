const express = require('express')
const router = express.Router()
const {createUser, loginUser, logout} = require('../../Controllers/UserController')

router.post('/Register',createUser)
router.post('/Login', loginUser )
router.post('/Logout', logout)

module.exports = router
