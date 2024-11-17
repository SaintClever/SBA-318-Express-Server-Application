import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.post("/", (req, res) => {
  console.log(req.body);
});


// Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log("http://localhost:3000/");
});