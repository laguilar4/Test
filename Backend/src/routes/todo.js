const {Router} = require('express');
const todolistCtrl = require('../controllers/todolist');
const jwtcontroller = require('../controllers/jwt');
const router = Router();

router.get('/', jwtcontroller.verifyToken ,todolistCtrl.getList);

router.post('/', jwtcontroller.verifyToken ,todolistCtrl.createList);

module.exports = router;
