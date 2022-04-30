const router = require('express').Router()
const orderController = require('../controllers/orderController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/order').get(auth, authAdmin, orderController.getOrders);
router.route('/order').post(auth, orderController.createOrder);
router.route('/order/:oid').put(orderController.editOrder);

module.exports = router;