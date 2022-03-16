const {Router} = require('express');
const usercontroller = require('../controllers/user');
const router = Router();

router.get('/', usercontroller.getUser);

router.post('/', usercontroller.createUser);


module.exports = router;