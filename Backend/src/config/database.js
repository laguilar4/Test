const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist',{
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
.then(db => console.log("Db is connected"))
.catch((err) => console.error(err));