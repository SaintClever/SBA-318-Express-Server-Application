import fs from 'fs';
import express from 'express';
const todos = "./data/todos.json";

const app = express();
const PORT = process.env.PORT || 3000;

// Backend DB
let db = {
  "todos": []
};

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.post("/", (req, res) => {
  db.todos.push(req.body);

  fs.writeFile(todos, JSON.stringify(db), err => {
    if (err) throw err;
    console.log("Done");
  });
  res.end();
});

app.get("/api", (req, res) => {
  res.json(db);
});

// Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log("http://localhost:3000/");
});