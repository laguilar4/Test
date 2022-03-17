const {Schema, model} = require ('mongoose');

const toDoListSchema= new Schema(
    {
    descripcion: {
        type: String, 
        required:true
    },
    persona: {
        type: String, 
        required:true
    },
    fechavenc: {
        type: Date, 
        required:false
    },
    terminada: {
        type: String, 
        required:false,
        default: "N"
    }
},{ 
    collection: 'data' 
})

module.exports = model("toDoList", toDoListSchema);