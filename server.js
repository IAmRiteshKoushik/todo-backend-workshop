import express from "express";

const app = express();
app.use(express.json())

// In-memory storage unit for todos -> upgrade to database later
const todos = [];

// Get all todos
app.get("/todo", (req, res) => {
    let response = []
    for(let i = 0; i < todos.length; i++){
        response.push(todos[i]);
    }
    res.status(200).json({
        todos: response
    })
});

// Get todo by id
app.get("/todo/:todoId", (req, res) => {
    const { todoId } = req.params;
    if (parseInt(todoId) >= todos.length) {
        res.status(404).json({
            message: "Todo not found"
        });
    }
    const todo = todos[parseInt(todoId)];
    res.status(200).json(todo);
});

// Create todo
app.post("/todo", (req, res) => {
    const { title, description } = req.body;
    const todo = {
        id: todos.length,
        title: title,
        description: description,
        completed: false
    }
    todos.push(todo);
    res.status(200).json({
        message: "Todo created successfully"
    });
});

// Update todo
app.put("/todo/:todoId", (req, res) => {
    const { todoId } = req.params;
    try {
        todos[parseInt(todoId)].completed = true
        res.status(200).json({
            message: "Todo completed",
        });
    } catch (err) {
        console.log(err)
        res.status(404).json({
            message: "Todo not found"
        });
    }
});

// Delete todo
app.delete("/todo/:todoId", (req, res) => {
    const { todoId } = req.params;
    try {
        todos.pop(parseInt(todoId));
        res.status(200).json({
            message: "Todo deleted",
        });
    } catch (err) {
        res.status(404).json({
            message: "Todo not found"
        });
    }
});

app.listen(3000, console.log("Server started at port: 3000"));
