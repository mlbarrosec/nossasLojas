# API Nossas Lojas
Repositório da API REST para e-comerce "Minhas Lojas", utilizando Node e Banco de dados MYSQL

<h2>Descrição:</h2>
Essa aplicação tem como objetivo principal implementar um <b>API REST</b>, utilizando <b>node.js</b> e banco de dados <b>MYSQL</b>, responsavel por manilular informações de lojas físicas de um ecomerce.
Essa API deve ser capaz de <b>cadastrar, editarm deletar, recuperar, listar e filtrar</b> as lojas cadastradas em um banco.

<h2>Configuração do Banco de dados</h2>

Para este projeto fou utilizado um banco de dados MYSQL de nome <b>"ourStores"</b>.
Para armazenas as informações das lojas no banco de dados foi criada a tabela stores com a seguinte estrutura.

id (INT)<br>
name (VARCHAR)<br>
adress (VARCHAR)<br>
phone (VARCHAR)<br>
cnpj (VARCHAR)<br>
workingHour (VARCHAR)<br>
city (VARCHAR)<br>
state (VARCHAR)<br>

- <h3>Script para criação da tabela <b>stores</b></h3>

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

- <b>Atenção: Você pode utilizar o arquivo ourstore.sql, que se encontra na raiz da aplicação, para criar a tabela.</b>
