  
const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProducts)


router.route('/products/:id')
    .delete(productCtrl.deleteProducts)
    .put(productCtrl.updateProducts)



module.exports = router