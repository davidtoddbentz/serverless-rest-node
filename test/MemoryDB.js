'use strict';
const BaseDB = require('../endpoints/BaseDB.js');

let log4js = require('log4js');
let logger = log4js.getLogger('MemoryDB');
logger.level = 'debug';

let _db = null;
class MemoryDB extends BaseDB{

    constructor(){
        super();
        _db = {};
    }

    create(obj, callback){
        _db[obj.id] = obj;
        callback(null);
    }

    read(id, callback){
        callback(null, _db[id]);
    }

    update(id, obj, callback){
        _db[id] = obj;
        callback(obj);
    }

    delete(id, callback){
        logger.debug("delete");
        _db[id] = null;
        callback(null);
    }
}

module.exports = MemoryDB;