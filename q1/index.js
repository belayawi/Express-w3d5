const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  if (!name && !age) {
    name = 'person';
    age = 20;
  }
  res.send(`Welcome ${name} I am ${age} years old`);
  
});

app.listen(3000);
