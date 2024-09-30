const express = require('express')
const router = express.Router()
const controller = require('../controllers/mainController.js')

router.get('/', controller.inicio)

module.exports = router
