const express = require('express');
const app = express();

app.get("/", function(req, res) {
res.sendFile(__dirname + "/pages/index.html");
});

app.get('/sobre', function(req, res) {
  res.send('sobre')
});

app.get('/ola/:cargo/:nome', function(req, res) {
  res.send("<h1>Olá "+req.params.nome+"</h1>");
});




app.listen(8000, function(){console.log('listening on http://localhost:8000');});