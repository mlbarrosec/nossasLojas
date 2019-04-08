
//Rodando servidor com express
var express = require('express');
var app = express();

app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000");
});