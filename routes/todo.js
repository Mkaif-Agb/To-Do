const router = require('express').Router();
const Todo = require('../models/todo');


router.post('/add/todo', (req, res)=>{

    // const todo = req.body.todo;
    const {todo} = req.body // destructuring
    // console.log(todo);
    const data = new Todo({todo});

    // Save
    data.save().then(()=>{
        console.log("Todo Added Successfully");
        res.redirect('/');
    }).catch((err) => console.log(err),
    res.redirect('/'))
})

router.get('/delete/todo/:_id', (req, res)=>{

    const {_id} = req.params;
    Todo.deleteOne({_id}).then(()=>{
        console.log("Todo Deleted Successfully");
        res.redirect('/');
    }).catch(err=>{console.log(err)});


})



module.exports = router;