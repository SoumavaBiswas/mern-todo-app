# First MERN project: A TODO app

This is a simple React-based to-do list application that communicates with a backend API to manage tasks. The original version of the application had an issue where newly added tasks or deleted tasks were not immediately reflected on the UI, requiring a manual browser refresh. This README explains how the issue was resolved to provide real-time updates to the task list.

## How to Use

1. Clone this repository: `git clone https://github.com/SoumavaBiswas/mern-todo-app.git`
2. Navigate to the project directory: `cd mern-todo-app`
3. Add .env file under backend to provide MONGODB_URI string.
4. Update backend api in frontend code. Will modify later based on environment.
5. Start the system using Docker Compose: docker-compose up --build -d
6. Access the application: `http://localhost:3000/`

## Deployment

Access site at: `https://mern-todo-app-frontend.onrender.com`

## Technologies Used

- React
- JavaScript
- RESTful API
- MongoDB
- Docker

## Credits

This project was created with the hunger of learning MERN stack end to end. It was created by Soumava Biswas.
