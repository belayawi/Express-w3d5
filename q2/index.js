
const express = require('express');
const app = express();

app.use(express.urlencoded());

app.use(express.json());

const path = require('path');

app.get('/',(req, res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/result', (req, res)=>{
  res.send(`Welcome  ${req.body.name} 
      your age is ${req.body.age}`);
});
app.listen(3000);