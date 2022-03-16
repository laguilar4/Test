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
        required:true
    },
    terminada: {
        type: String, 
        required:false
    }
},{
    timestamps:true,
    versionKey:false
},{ 
    collection: 'data' 
})

module.exports = model("toDoList", toDoListSchema);