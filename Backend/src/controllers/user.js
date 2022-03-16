const userCtrl ={};
const User = require('../models/user');

userCtrl.getUser = async (req,res) => {
    const usuarios = await User.find()
    res.json(usuarios);
};
userCtrl.createUser = async (req,res) => {
    const newUsers= new User(req.body);
    await newUsers.save();
    res.send({message: 'Usuario creado'});
};

module.exports = userCtrl;