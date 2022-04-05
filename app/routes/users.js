const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.userList)
router.post('/add', UserController.addUser)

module.exports = router
