const express = require('express');
const app = express();

app.get("/", function(req, res) {
  res.send("principal");
});

app.get('/sobre', function(req, res) {
  res.send('sobre')
});

app.listen(3000, function(){
  console.log('listening on http://localhost:3000');
});