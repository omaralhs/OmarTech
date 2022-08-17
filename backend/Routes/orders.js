const express =require('express')
const {getAll,getProductById} = require('../controllers/order')
const router=express.Router()


router.post('/',getAll)

module.exports=router