// this file define all routes in aplication

module.exports = function(app) {
    
    //use requisition of type get
    app.get("/stores" , function(req,res){
        res.send('OK');
    });

    //route for add data in db
    app.post("/stores/store",function(req,res){
                
        req.assert("name", "O nome é obrigatório.").notEmpty();
        var errors = req.validationErrors();

        if(errors) {
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }

        var store = req.body;
        console.log('processando pagamento..');

        //create connection whith db
        var connection = app.persistencia.ConnectionConfig();
        var storeDAO = new app.persistencia.StoreDAO(connection);

        storeDAO.salva(store, function (erro, resultado){
            if(erro){
                console.log("erro ao inserir no banco: " + erro);
                res.status(500).send(erro);
            }else{
                console.log('pagamento criado');
                res.location('/pagamentos/pagamento/' + resultado.insertId);

                res.status(201).json(store);
            }            
            
        });

    });

}