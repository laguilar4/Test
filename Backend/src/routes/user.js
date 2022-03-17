const {Router} = require('express');
const usercontroller = require('../controllers/user');
const router = Router();

router.get('/', usercontroller.getUser);

router.post('/', usercontroller.createUser);

router.post('/login', usercontroller.logUser);


module.exports = router;