// this file define all routes in aplication

module.exports = function(app) {
    
    //use requisition of type get
    app.get("/stores" , function(req,res){
        res.send('OK');
    });

    //route for add data in db
    app.post("/stores/store",function(req,res){
        var store = req.body;
        console.log(store);
        res.send('Ok');
    });

}