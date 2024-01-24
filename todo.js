const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())

let todos = [];
var c=0;
  
  app.get('/todos', (req, res) => {
    res.send(todos);
  });

  app.post('/todos', (req, res) => {
    const newTodo = {
    //   id: Math.floor(Math.random() * 1000000), // unique random id
      id:c,
      title: req.body.title,
      description: req.body.description,
    };
    c=c+1;
    todos.push(newTodo);
    //res.status(201).json(newTodo);
  });
app.listen(3000)