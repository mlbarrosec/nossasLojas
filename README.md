# API Nossas Lojas
Repositório da API REST para e-comerce "Minhas Lojas", utilizando Node e Banco de dados MYSQL

## Descrição
Essa aplicação tem como objetivo principal implementar um API REST, utilizando node.js e banco de dados MYSQL, responsavel por manilular 
informações de lojas físicas de um ecomerce.
Essa API deve ser capaz de cadastrar, editarm deletar, recuperar, listar e filtrar as lojas cadastradas em um banco.

## Funcionamento
Para execuar a aplicação é necessário ter o node instalado em seu computador.
você pode obter ele no endereço: https://nodejs.org/en/

## Configuração do Banco de dados

Para este projeto fou utilizado um banco de dados MYSQL de nome "ourStores".
Para armazenas as informações das lojas no banco de dados foi criada a tabela stores com a seguinte estrutura.

id (INT)<br>
name (VARCHAR)<br>
adress (VARCHAR)<br>
phone (VARCHAR)<br>
cnpj (VARCHAR)<br>
workingHour (VARCHAR)<br>
city (VARCHAR)<br>
state (VARCHAR)<br>

## Script para criação da tabela stores

CREATE TABLE `stores`(  <br>
`id` INT(11) NOT NULL AUTO_INCREMENT ,  <br>
`name` VARCHAR(255) NOT NULL ,  <br>
`adress` VARCHAR(255) NOT NULL ,  <br>
`phone` VARCHAR(255) NOT NULL ,  <br>
`cnpj` VARCHAR(255) NOT NULL ,  <br>
`workingHour` VARCHAR(255) NOT NULL ,  <br>
`city` VARCHAR(255) NOT NULL ,  <br>
`state` VARCHAR(3) NOT NULL ,  <br>
PRIMARY KEY (`id`))  <br>
ENGINE = InnoDB; <br>

-Atenção: Você pode utilizar o arquivo ourstore.sql, que se encontra na raiz da aplicação, para criar a tabela.
