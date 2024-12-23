const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./Routes/taskRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// DB conncetion
mongoose.connect("mongodb://localhost:27017/ToDoList?authSource=admin");

const db = mongoose.connection;

db.on('error', () => {
    console.error("Connection Error!")
});
db.once('open', () => {
    console.log('Database connected')
});


app.use(taskRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});