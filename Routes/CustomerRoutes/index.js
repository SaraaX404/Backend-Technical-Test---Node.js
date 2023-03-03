const express = require('express')
const router = express.Router()
const owner = require('../../Middleware/roles/ownerLevel')
const manager = require('../../Middleware/roles/managerLevel')
const cashier = require('../../Middleware/roles/cashierLevel')
const {create, get, deleteCustomer, softDelete, update } = require('../../Controllers/CustomerController')

router.route('/').post(owner,create).get(get)
router.route('/:id').delete(owner,deleteCustomer).put(cashier,update)
router.put('/softDelete/:id',manager, softDelete)



module.exports = router
