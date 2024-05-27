// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new array to store comments
const comments = [];

// Use the express middleware to parse the body of the request
app.use(express.json());

// Create a POST route for adding comments
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.status(200).send();
});

// Create a GET route for getting comments
app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Path: index.js
// Create a new comment
const newComment = {
  comment: 'Hello world!',
};

// Send a POST request to the server
fetch('http://localhost:3000/comments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newComment),
});

// Send a GET request to the server
fetch('http://localhost:3000/comments')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Output: ['Hello world!']