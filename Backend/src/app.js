const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const conectMongo = require('./config/database');
const app = express();

app.listen(3001, () => {
    console.log(`Listening on port 3001`);
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/user", require('./routes/user'));
//app.use("/api/todo", require('./routes/todolist'));

module.exports = app;