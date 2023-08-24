import React, { useEffect, useState } from 'react';
import './style.css';

const apiBaseURL = 'https://mern-todo-app-backend-nwn9.onrender.com'
console.log(`Backend API: ${apiBaseURL}`)

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch(`${apiBaseURL}/api/tasks`);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetch(`${apiBaseURL}/api/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const handleAddTask = async () => {
    if (!newTask) return;

    await fetch(`${apiBaseURL}/api/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newTask }),
    });

    setNewTask('');
    await fetchTasks();
  };

  const handleDeleteTask = async (taskId) => {
    await fetch(`${apiBaseURL}/api/tasks/${taskId}`, {
      method: 'DELETE',
    });

    await fetchTasks();
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

