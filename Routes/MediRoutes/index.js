const express = require('express')
const router = express.Router()
const owner = require('../../Middleware/roles/ownerLevel')
const manager = require('../../Middleware/roles/managerLevel')
const cashier = require('../../Middleware/roles/cashierLevel')
const {create, get, deleteMedi, softDelete, update, getById } = require('../../Controllers/MedicationController')

router.route('/').post(owner,create).get(get)
router.route('/:id').delete(owner,deleteMedi).put(cashier,update).get(getById)
router.put('/softDelete/:id',manager, softDelete)



module.exports = router
