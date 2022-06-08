const express = require('express')
const router = express.Router()
const userControler = require('../controllers/userControler')

router.post('/register', userControler.register)
router.post('/login',userControler.login)
    

module.exports = router