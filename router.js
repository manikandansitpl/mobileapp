const express = require('express')
const router = express.Router()
const { login , register } = require('./controller')

router.route("/login").post(login)
router.route('/Register').post(register)


 module.exports = router;