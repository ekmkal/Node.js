const express = require('express');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');

const app = express();

app.use(express.json());

// Creating new post
app.post('/blogs', (req, res) => {
  // Getting the title and content from the request
  const title = req.body.title;
  const content = req.body.content;

  fs.writeFileSync(title, content);
  res.end('ok');
});

// Updating a specific post
app.put('/blogs/:title', (req, res) => {
  // Getting the title from url, and the content from request
  const title = req.params.title;
  const content = req.body.content;
  
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok');
  } else {
    // Handling error
    res.status(404);
    res.send('This post does not exist!');
    return;
  };
});

// Deleting a specific post
app.delete('/blogs/:title', (req, res) => {
  // Getting the title from url
  const title = req.params.title;

  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Handling error
    res.status(400);
    res.send('This post does not exist!');
    return;
  };
});

// Reading a specific post
app.get('/blogs/:title', (req, res) => {
  // Getting the title from url
  const title = req.params.title;
  
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.status(200);
    res.send(post);
  } else {
    // Handling error
    res.status(404);
    res.send('This post does not exist!');
    return;
  };
});

// Reading all posts
app.get('/blogs', (req, res) => {
  const allPosts = [ ];
  
  const dirents = fs.readdirSync(__dirname, { withFileTypes: true });
  
  // Filtering the files have not an extension to find the blog posts
  dirents
  .filter(dirent => dirent.isFile())
  .forEach(dirent => {
    if(path.extname(dirent.name) === '') {
      const postBuffer = fs.readFileSync(dirent.name);
      const post = { "title" : dirent.name, "content" : postBuffer.toString() };
      allPosts.push(post);
    };
  });
  
  res.setHeader('Content-Type', 'application/json');
  res.send(allPosts);
});

app.listen(3000);
