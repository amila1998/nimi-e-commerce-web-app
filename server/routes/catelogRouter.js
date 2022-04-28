const router = require('express').Router()
const catelogController = require('../controllers/catelogController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/catelog')
    .get(catelogController.getCategories)
    .post(auth, authAdmin, catelogController.createCatelog)

router.route('/catelog/:id')
    .delete(auth, authAdmin, catelogController.deleteCatelog)
    .put(auth, authAdmin, catelogController.updateCatelog)


module.exports = router;