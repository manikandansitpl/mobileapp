const express = require('express')
const router = express.Router()
const { login , register , personGet } = require('./controller')

router.route("/login").post(login)
router.route('/Register').post(register)
router.route("/getUser").get(personGet)


 module.exports = router;