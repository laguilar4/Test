const todoCtrl ={};
const Todol = require('../models/todolist');

todoCtrl.getList = async (req,res) => {
    const lista = await Todol.find()
    res.json(lista);
};
todoCtrl.createList = async (req,res) => {
    const newList= new Todol(req.body);
    await newList.save();
    res.send({message: 'Lista creada'});
};
todoCtrl.deleteList = async (req,res) => {
    await Todol.findByIdAndDelete(req.params.id);
    res.json({status: 'Lista eliminada'});
};

module.exports = todoCtrl;