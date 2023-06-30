const express = require('express')
const router = express.Router()
const { login , register , personGet ,imageUpload ,NewsPost ,NewsGet} = require('../controller/controller')
const multer  = require('multer')



router.route("/login").post(login)
router.route('/Register').post(register)
router.route("/getUser").get(personGet)
router.route("/getNews").get(NewsGet)
router.route('/upload',express.static("uploads")).post(imageUpload)
router.route('/fdmNews').post(NewsPost)


 module.exports = router;