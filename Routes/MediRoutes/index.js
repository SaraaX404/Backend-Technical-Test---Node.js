const express = require('express')
const router = express.Router()
const {create, get, deleteMedi, softDelete, update } = require('../../Controllers/MedicationController')

router.route('/').post(create).get(get).delete(deleteMedi).put(update)
router.put('/softDelete', softDelete)



module.exports = router
