'use strict';
const BaseRestHandler = require('../BaseRestHandler.js');

const {PostRequest, PutRequest} = require('./models/Requests.js');
const {PostResponse, GetResponse, PutResponse, DeleteResponse} = require('./models/Responses.js');

let log4js = require('log4js');
let logger = log4js.getLogger('Users');
logger.level = 'debug';

class User extends BaseRestHandler {

    constructor(db){
        super(db, PostRequest, PostResponse, GetResponse,
            PutRequest, PutResponse, DeleteResponse);

    }

    post(obj, callback) {
        this.db.create(obj, function(err){
            logger.debug("create done");
            callback(err, obj);
        });
    }

    get(path, callback) {
        this.db.read(path.id, function(err, data){
            logger.debug('Get done');
            logger.debug(data);
            callback(err, data);
        });
    }

    put(path, obj, callback) {
        this.db.update(path.id, obj, function(err){
            logger.debug('Put done');
            callback(err, obj);
        });
    }

    delete(path, callback) {

        let db = this.db;
        db.read(path.id, function(err, data){
            logger.debug("read obj");
            if(err)
                throw err;
            db.delete(path.id, function(err){
                if (err)
                    throw err;
                logger.debug("delete obj");
                callback(err, data);
            });
        });
    }
}

module.exports = User;