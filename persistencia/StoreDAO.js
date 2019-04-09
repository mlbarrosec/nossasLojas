//this function receive for parametrer an object 
//of type conectionConfig

function StoreDAO(connection) {
    this._connection = connection;
}

StoreDAO.prototype.salva = function(store,callback){
    this._connection.query("INSERT INTO stores SET ?", store, callback);
}

StoreDAO.prototype.buscaPorId = function(id,callback){
    this._connection.query("SELECT * FROM stores where id =?",[id],callback);
}

module.exports = function(){
    return StoreDAO;
}