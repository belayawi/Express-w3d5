const express = require('express');
const path = require('path');

const app = express();

const date = new Date();
const hour = date.getHours();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
  res.render('index', { hour: hour });
});

app.listen(3000, () => {
  console.log('Listening at the port 300');
});
