const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task')


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/todos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
    try {
        const { text } = req.body;
        const newTask = new Task({ text });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.log(req.body)
        res.status(500).json({ error: 'Error creating task' });
    }
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
    try {
        console.log('Successfully hit API.')
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.log(req.body)
        res.status(500).json({ error: 'Error fetching tasks' });
    }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        await Task.findByIdAndDelete(taskId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
