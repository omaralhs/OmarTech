const express =require('express')
const {getAll,getProductById} = require('../controllers/products')
const router=express.Router()

router.get('/',getAll)

router.get('/:id',getProductById)


module.exports=router