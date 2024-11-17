import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Backend DB
let db = [];

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.post("/", (req, res) => {
  db.push(req.body);
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