const express = require('express')
const router = express.Router()
const {personSet , personSet1 , personPost, retrive , sirsPost} = require('./controller')

router.route("/").get(personSet1)
router.route("/all").get(personSet)
router.route('/postStu').post(personPost)
router.route('/hashnot').post(retrive)
router.route('/sirs').post(sirsPost)


 module.exports = router;