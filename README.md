# API Nossas Lojas
Repositório da API REST para e-comerce "Minhas Lojas", utilizando Node e Banco de dados MYSQL

## Descrição
Essa aplicação tem como objetivo principal implementar um API REST, utilizando node.js e banco de dados MYSQL, responsavel por manilular 
informações de lojas físicas de um ecomerce.
Essa API deve ser capaz de cadastrar, editarm deletar, recuperar, listar e filtrar as lojas cadastradas em um banco.

## Funcionamento
- Para execuar a aplicação é necessário ter o node instalado em seu computador.
você pode obter ele no endereço: https://nodejs.org/en/

- Após instalação execute o comando node index.js na pasta raiz do projeto
seu servidor estará rodando caso apareça no console o aviso "servidor rodando na porta 3000";

- Para testar as requisições é remondavel que use o puglin do postmam para o chrome
o mesmo se encontra para download em: https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop

### POST Cadastra elemento loja no banco de dados
Para utilizar o metodo POST você deve executar a seguinte requisição no postman
tipo: POST
endereço: http://localhost:3000/stores/store/
E no corpo da requição o json com os dados da loja que deseja cadastrar no banco de dados
exemplo:
{
		"name":"Loja A",
		"address":"Rua Abc, 000",
		"phone":"(00) 0000-0000",
		"cnpj":"00.000.000/0000-00",
		"workingHour":"Diariamente das 11hs às 23hs", 
		"city":"Cidade ABC",
		"state":"A"
}

### PUT Edita loja por ID
tipo: PUT
endereço: http://localhost:3000/stores/store/id (troque o id pelo id da linha a ser editada);
No arquivo storeRoute.js o trecho a seguir define os dados que são atualizados

//values to update
store.id = id;
store.name = "Loja A";
store.address = "Rua Nova, 1241";
store.phone = "(XX) XXXXX-XX";
store.cnpj = "00.000.000/0000-01";
store.workingHour = "Diariamente das 11hs às 23hs";
store.city = "Rio Grande";
store.state = "RS";



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
