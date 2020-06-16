const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('haha YEP v0.9.1');
});

app.get('/test', (req, res) => {
  res.send('testing helm upgrades using minor');
});

app.get('/printenv', (req, res) => {
  res.json(process.env);
});

const PORT = 80;
app.listen(PORT);
console.log(`Running on port: ${PORT}`);