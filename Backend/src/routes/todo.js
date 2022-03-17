const {Router} = require('express');
const todolistCtrl = require('../controllers/todolist')
const router = Router();

router.get('/', todolistCtrl.getList);

router.post('/', todolistCtrl.createList);

module.exports = router;
