import fs from 'fs';
import express, { json } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.post("/", (req, res) => {
  console.log(req.body, "post/");
  res.redirect("/");
});


app.post("/api", (req, res) => {
  console.log(req.body, "post/api");

  // Read file
  fs.readFile('./data/users.json', (err, data) => {
    let jsonToObject = JSON.parse(data);

    let userData = {
      "id": jsonToObject.length,
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "email": req.body.email,
      "createTime": req.body.createTime
    }

    jsonToObject.push(userData);

    let objectToJson = JSON.stringify(jsonToObject);
    console.log(objectToJson, 'stringy');
  
    // Update File
    fs.writeFile("./data/users.json", objectToJson, (err) => {
      res.json(req.body);
    });
  });

});


app.get("/api", (req, res) => {
  console.log(req.body, "get/api");

  fs.readFile('./data/users.json', (err, data) => {
    let jsonToObject = JSON.parse(data);
    req.body = jsonToObject;
    console.log(req.body, 'get/api');
    res.json(req.body);
  });
});


app.put("/api", (req, res) => {
  console.log(req.body,'put/api');

  let userId = req.body.userId;

  fs.readFile("./data/users.json", (err, data) => {
    let jsonToObject = JSON.parse(data);
    
    // remove unwanted user
    jsonToObject.splice(userId, 1);
    console.log(jsonToObject, 'delete/api', userId);

    let objectToJson = JSON.stringify(jsonToObject);
    console.log(objectToJson, 'stringyyyy delete/api');

    fs.writeFile("./data/users.json", objectToJson, (err) => {
      res.json(objectToJson);
    });

  });
});


// Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log("http://localhost:3000/");
});