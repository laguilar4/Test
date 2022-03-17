const {Router} = require('express');
const usercontroller = require('../controllers/user');
const jwtcontroller = require('../controllers/jwt');
const router = Router();

router.get('/', jwtcontroller.verifyToken , usercontroller.getUser);

router.post('/', usercontroller.createUser);

router.post('/login', usercontroller.logUser);


module.exports = router;