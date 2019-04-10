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
        var store = req.body;
        //{};
       
        //get id in parameters of requisition
        var id = req.params.id;
        store.id = id;

        //values to update     
        

        var connection = app.persistencia.ConnectionConfig();
        var storeDAO = new app.persistencia.StoreDAO(connection);

        storeDAO.update(store, function(erro){
            if(erro){
                res.status(500).send(erro);
                return;
            }else{
                console.log('loja atualizada');
                //res.send(store);
                res.status(201).json(store);

            }
        });

    });

    //Method for delete store in data base, per your id
    app.delete("/stores/store/:id", function (req,res){
        var store = {}

        var id = req.params.id;
        store.id = id;
        
        var connection = app.persistencia.ConnectionConfig();
        var storeDAO = new app.persistencia.StoreDAO(connection);

        storeDAO.delete(store, function(erro){
            if(erro){
                res.status(500).send(erro);
                return;
            }else{
                console.log('loja deletada');
                res.send(store)
                res.status(204).json(store);

            }
        })

    });

}