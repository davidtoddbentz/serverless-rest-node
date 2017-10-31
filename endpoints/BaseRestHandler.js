'use strict';

const BaseDB = require('./BaseDB.js');

const {BaseError, NotImplemented, ClientError} = require('./Errors.js');
let log4js = require('log4js');
let logger = log4js.getLogger('BaseRestHandler');
logger.level = 'debug';

class BaseRestHandler {

    constructor(db, PostRequest, PostResponse, GetResponse,
                PutRequest, PutResponse, DeleteResponse){

        this.POST = "POST";
        this.GET = "GET";
        this.PUT = "PUT";
        this.DELETE = "DELETE";

        if (db instanceof BaseDB) {
            this.db = db;
        }
        else{
            throw new Error("db isn't instance of BaseDB");
        }

        this.post_request = PostRequest;
        this.post_response = PostResponse;

        this.get_response = GetResponse;

        this.put_request = PutRequest;
        this.put_response = PutResponse;

        this.delete_response = DeleteResponse;
        logger.info('super constructed');
    }

    call_method(path, body, httpMethod, callback){

        let func = function(err, data){
            callback(err, data);
        };

        logger.info('calling ' + httpMethod);
        switch (httpMethod) {
            case this.POST:
                return this._post(body, func);
            case this.GET:
                return this._get(path,  func);
            case this.PUT:
                return this._put(path, body, func);
            case this.DELETE:
                return this._delete(path, func);
            default:
                throw new ClientError("httpMethod not supported");
        }
    }

    handle(event, context, callback){
        try {
            logger.info('handler');
            logger.debug(JSON.stringify(event));
            logger.debug(JSON.stringify(context));

            this.headers = event.headers;
            event.body = event.body ? JSON.parse(event.body) : null;

            this.call_method(event.pathParameters, event.body, event.httpMethod, function(err, data){
                if (err) {
                    throw err;
                }
                logger.info('returning');
                callback({
                    statusCode: 200,
                    body: JSON.stringify(data.build())
                });
            });
        }
        catch(error)
        {
            if (error instanceof BaseError){
                logger.warn('client: ' + error);
                callback(error.build());
            }
            else{
                logger.error('server error: ' + error);
                callback( {"message":"Server Error", "id":500} );
            }
        }
    }


    _post(obj, callback) {
        logger.debug(this._post.name + ' start');
        obj = new this.post_request(obj);
        let post_response = this.post_response;
        this.post(obj, function(err, data){
            callback(err, new post_response(data));
        });
        
    }
    _get(id, callback) {
        logger.debug(this._get.name + ' start');
        let get_response = this.get_response;
        this.get(id, function(err, data){
            callback(err, new get_response(data));
        });
    }
    _put(id, obj, callback) {
        logger.debug(this._put.name + ' start');
        obj = new this.put_request(obj);
        let put_response = this.put_response;
        this.put(id, obj, function(err, data){
            callback(err, new put_response(data));
        });
    }
    _delete(id, callback) {
        let delete_response = this.delete_response;
        logger.debug(this._delete.name + ' start');
        this.delete(id, function(err, data){
            callback(err, new delete_response(data));
        });
    }


    post(obj, callback) {
        throw new NotImplemented();
    }
    get(id, callback) {
        throw new NotImplemented();
    }
    put(id, obj, callback) {
        throw new NotImplemented();
    }
    delete(id, callback) {
        throw new NotImplemented();
    }
}

module.exports = BaseRestHandler;