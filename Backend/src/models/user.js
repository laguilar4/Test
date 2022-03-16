const {Schema, model} = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},{ 
    collection: 'users' 
});


module.exports = model("User", userSchema);