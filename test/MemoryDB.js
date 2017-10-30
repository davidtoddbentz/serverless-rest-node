'use strict';
const BaseDB = require('../endpoints/BaseDB.js');


let _db = null;
class MemoryDB extends BaseDB{

    constructor(){
        super();
        _db = {};
    }

    create(obj){
        _db[obj.id] = obj;
    }

    read(id){
        return _db[id];
    }

    update(id, obj){
        _db[id] = obj;
    }

    delete(id){
        _db[id] = null;
    }
}

module.exports = MemoryDB;