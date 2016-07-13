var washedAppMethods = {
	all: function(callback){
		//in here, I want to use the ORM to get ALL inventory from the DB
		callback(inventoryData)//pinar's data
	},
	create: function(inventoryObj, callback){
		//here I want to insert into the database via ORM
		callback(newInventoryObj)
	},
	update: function(inventoryObj, callback){
		// here I want to update to db via the ORM
	}
}

module.exports = washedAppMethods