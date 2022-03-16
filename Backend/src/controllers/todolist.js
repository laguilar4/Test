const comidaCtrl ={};
const Comida = require('../models/Comidas');

comidaCtrl.getComidas = async (req,res) => {
    const comidas = await Comida.find()
    res.json(comidas);
};
comidaCtrl.createComida = async (req,res) => {
    const newComida= new Comida(req.body);
    await newComida.save();
    res.send({message: 'Comida creada'});
};
comidaCtrl.getComida = async (req,res) => {
    
    const comida = await Comida.findById(req.params.id);
    res.send(comida);
    
};
comidaCtrl.editComidas = async (req,res) => {
    await Comida.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Comida actualizada'});
};
comidaCtrl.deleteComidas = async (req,res) => {
    await Comida.findByIdAndDelete(req.params.id);
    res.json({status: 'Comida eliminada'});
};

module.exports = comidaCtrl;