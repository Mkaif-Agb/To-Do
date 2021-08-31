const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Mongodb Connection
mongoose.connect('mongodb://localhost/todo_express', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

// routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))



app.listen(3000, ()=>{
    console.log('Server is Listening on Port:3000');
})