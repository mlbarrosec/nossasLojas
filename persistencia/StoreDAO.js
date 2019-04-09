//this function receive for parametrer an object 
//of type conectionConfig

function StoreDAO(connection) {
    this._connection = connection;
}

StoreDAO.prototype.save = function(store,callback){
    this._connection.query("INSERT INTO stores SET ?", store, callback);
}

StoreDAO.prototype.update = function(store,callback) {
    this._connection.query("UPDATE stores SET name = ?, address = ?, phone = ?, cnpj = ?, workingHour = ?, city = ?, state = ? WHERE id = ?",[store.name, store.address, store.phone, store.cnpj, store.workingHour, store.city, store.state, store.id], callback);
}

StoreDAO.prototype.searchForID= function(id,callback){
    this._connection.query("SELECT * FROM stores where id =?",[id],callback);
}

module.exports = function(){
    return StoreDAO;
}