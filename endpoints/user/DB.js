const BaseDB = require('../BaseDB.js');

class DB extends BaseDB{

    constructor(){
        super();

        this.db = {};
    }

    create(obj){

        this.db[obj.id] = obj;

    }

    read(id){
        return this.db[id];
    }

    update(id, obj){
        this.db[id] = obj;
    }

    delete(id){
        this.db[id] = null;
    }

}

module.exports = DB;