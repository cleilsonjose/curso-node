

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

```
var soma = function(a,b){
	return a + b;
}


module.exports = soma;
```

```
var Somafunc= require("./soma");

console.log(`soma = ${Somafunc(1,2)}`);
```







 