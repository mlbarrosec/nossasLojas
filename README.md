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

#### -POST (cadastra elemento loja no banco de dados)

Para utilizar o metodo POST você deve executar a seguinte requisição no postman
Requisição tipo: POST
endereço: http://localhost:3000/stores/store/

E no corpo da requição o json com os dados da loja que deseja cadastrar no banco de dados

<b>exemplo:</b><br>
>{<br>
		"name":"Loja A",<br>
		"address":"Rua Abc, 000",<br>
		"phone":"(00) 0000-0000",<br>
		"cnpj":"00.000.000/0000-00",<br>
		"workingHour":"Diariamente das 11hs às 23hs", <br>
		"city":"Cidade ABC",<br>
		"state":"A"<br>
}<br>

#### -PUT (Edita loja por ID)
Requisição tipo: PUT
Endereço: http://localhost:3000/stores/store/id (troque o id pelo id da linha a ser editada);

Para atualizar um campo no banco de dados você deve passar no postman, o json com os campos que deseja editar
Exemplo:<br>
{<br>
	"name":"Loja J",<br>
	"address":"Demon teste, 666"<br>
}<br>
Esse comando editara o nome e endereço da loja de id 3 no banco.

#### -DELETE (Deleta uma loja pelo seu ID)
Requisição tipo: DELETE
Ederereço: http://localhost:3000/stores/store/id (troque o id pelo id da linha a ser editada);

Execute no postman a requisição do tipo DELETE com o endereço acima indicando o id da linha que deve ser deletada. 

#### -GET (Listar loja por por ID)
Reuisição tipo: GET
Endereço: http://localhost:3000/stores/store/id (troque o id pelo id da linha a ser editada);

Ao executar a requisição do tipo GET pelo postman, você receberá os dados da loja de mesmo id ou a informação de que a loja não foi encontrada.

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
