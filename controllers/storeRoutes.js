// this file define all routes in aplication

module.exports = function(app) {
    
    //use requisition of type get
    app.get("/stores" , function(req,res){
        res.send('OK');
    });

}