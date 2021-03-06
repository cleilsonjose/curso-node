# Anotações

## O QUE É NODE.JS

É um interpretador Java script que não depende do navegador

## Vantagens

- Muito leve
- Pouco uso de memória ram
- Melhor aproveitamento da cpu
- Utiliza Java script
- Tem um dos maiores ecossistemas de bibliotecas do mundo, módulos e plug-ins do mundo
- Suportar um número imenso de requisições

# Módulos

Módulo é dividir sua aplicação em partes.

Arquivo soma.js:

~~~javascript
var soma = function(a,b){
	return a + b;
}


module.exports = soma;
~~~

Arquivo calc.js:

~~~javascript
var Somafunc= require("./soma");

console.log(`soma = ${Somafunc(1,2)}`);
~~~~



## Express

O *Express* é um *framework* para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

Para instalar use o seguinte comando:

```
npm install express --save

ou

yarn add express
```



## Rotas 

Rotas são os caminhos da nossa aplicação, ex:

~~~javascript
const express = require('express');
const app = express();

app.get('/sobre', function(req, res) {
  res.send('sobre')
});

app.listen(3000, function(){
  console.log('listening on http://localhost:3000');
});
~~~



## Parâmetros 

Parâmetros são informações que são passadas através das rotas, a qual será utilizada para realizar alguma ação, por exemplo jogar os dados para o banco de dados.

~~~javascript
app.get('/ola/:nome', function(req, res) {
  res.send("<h1>Olá "+ req.params +"</h1>");
});
~~~

Pode pegar um parâmetro especifico:

~~~javascript
app.get('/ola/:cargo/:nome', function(req, res) {
  res.send("<h1>Olá "+req.params.nome+"</h1>");
});
~~~

Pode ser opcional, é só colocar um '?' na frente do parâmetro :

~~~javascript
app.get('/ola/:nome/:sobrenome?', function(req, res) {
  res.send("<h1>Olá "+req.params.nome+"</h1>");
});
~~~



 
