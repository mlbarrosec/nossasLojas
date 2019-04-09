// this file define all routes in aplication

module.exports = function(app) {
    
    //use requisition of type get
    app.get("/stores" , function(req,res){
        res.send('OK');
    });

    //route for add data in db
    app.post("/stores/store",function(req,res){

        //verify requisitions fields (validator-express)
        req.assert("name", "O campo nome é obrigatório.").notEmpty();
        req.assert("address", "O campo endereço deve ser preenchido").notEmpty();
        req.assert("phone", "O campo telefone deve ser preenchido").notEmpty();
        req.assert("cnpj","O campo CNPJ deve ser preenchido").notEmpty();
        req.assert("workingHour","O campo horário de funcionamento deve ser preenchido").notEmpty();
        req.assert("city", "A campo cidade deve ser preenchido").notEmpty();
        req.assert("state", "O campo state tem que ser preenchido").notEmpty();

        //verify if error where found
        var errors = req.validationErrors();
        if(errors) {
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }

        //requisition body-parser 
        var store = req.body;
       
        //create connection whith db
        var connection = app.persistencia.ConnectionConfig();
        var storeDAO = new app.persistencia.StoreDAO(connection);

        storeDAO.save(store, function (erro, resultado){
            if(erro){
                console.log("erro ao inserir no banco: " + erro);
                res.status(500).send(erro);
            }else{
                console.log('Loja Cadastrada');
                res.location('/stores/store/' + resultado.insertId);

                res.status(201).json(store);
            }            
        });

    });


    // Method  pu for update table stores
    app.put("/stores/store/:id", function(req,res){
        var store = {};
        var id = req.params.id;

        //values to update
        store.id = id;
        store.name = "Loja A";
        store.address = "Rua Nova, 1241";
        store.phone = "(XX) XXXXX-XX";
        store.cnpj = "00.000.000/0000-01";
        store.workingHour = "Diariamente das 11hs às 23hs";
        store.city = "Rio Grande";
        store.state = "RS";

        var connection = app.persistencia.ConnectionConfig();
        var storeDAO = new app.persistencia.StoreDAO(connection);

        storeDAO.update(store, function(erro){
            if(erro){
                res.status(500).send(erro);
                return;
            }
            console.log('loja atualizada');
            res.send(store);
        });

    });

}