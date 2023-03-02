const express = require('express')
const router = express.Router()
const {create, get, deleteCustomer, softDelete, update } = require('../../Controllers/CustomerController')

router.route('/').post(create).get(get).delete(deleteCustomer).put(update)
router.put('/softDelete', softDelete)



module.exports = router
