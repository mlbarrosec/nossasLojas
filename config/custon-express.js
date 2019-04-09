//Arquivo de configuração do express
var express = require ('express'); //importa a biblióteca express

module.exports = function() { //esse modulo exporta a variavel app com express e suas funcionalidades
    
    var app = express();

    return app;
}