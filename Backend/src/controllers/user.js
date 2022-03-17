const userCtrl ={};
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SEED_TOKEN = 'Test_todolist_token';

userCtrl.getUser = async (req,res) => {
    const usuarios = await User.find()
    res.json(usuarios);
};
userCtrl.createUser = async (req,res) => {
    const newUsers= new User(req.body);
    await newUsers.save();
    res.send({message: 'Usuario creado'});
};

userCtrl.logUser = async (req, res) =>
{
    // Validaciond e existencia
    const user = await User.findOne({email: req.body.email});
    const validPassword = User.findOne({password: req.body.password});
    if(!user) {
        return res.status(400).json({error: 'Usuario no encontrado'});
    }else{
        if(!validPassword){
         return res.status(400).json({error: 'Constraseña invalida'});
        }else{
            const token = jwt.sign({
                name: user.name,
                role: user.role
            }, SEED_TOKEN);
            res.header('auth-token', token).json({
                data: { token },
                message: 'Bienvenido'
            });
        }
    }
}

module.exports = userCtrl;