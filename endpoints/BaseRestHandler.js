'use strict';

const BaseDB = require('./BaseDB.js');

const {BaseError, NotImplemented} = require('./Errors.js');
let log4js = require('log4js');
let logger = log4js.getLogger();
logger.level = 'debug';

class BaseRestHandler {

    constructor(db, PostRequest, PostResponse, GetResponse,
                PutRequest, PutResponse, DeleteResponse){

        this.POST = "POST";
        this.GET = "GET";
        this.PUT = "PUT";
        this.DELETE = "DELETE";

        if (db instanceof BaseDB){
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

    call_method(path, body, httpMethod){

        logger.info('calling ' + httpMethod);
        switch (httpMethod) {
            case this.POST:
                return this._post(body);
            case this.GET:
                return this._get(path);
            case this.PUT:
                return this._put(path, body);
            case this.DELETE:
                return this._delete(path);
            default:
                return null;
        }
    }

    handle(event, context, callback){
        try {
            logger.info('handler');
            this.headers = event.headers;
            let ret = this.call_method(event.path, JSON.parse(event.body), event.httpMethod);
            return {
                statusCode: 200,
                body: JSON.stringify(ret.build())
            };
        }
        catch(error)
        {
            if (error instanceof BaseError){
                logger.warn('client: ' + error);
                return error.build();
            }
            else{
                logger.error('server error: ' + error);
                return {"message":"Server Error", "id":500}
            }
        }
    }


    _post(obj) {
        logger.debug(this._post.name + ' start');
        obj = new this.post_request(obj);
        return new this.post_response(this.post(obj));
        
    }
    _get(id) {
        logger.debug(this._get.name + ' start');
        return new this.get_response(this.get(id));
    }
    _put(id, obj) {
        logger.debug(this._put.name + ' start');
        obj = new this.put_request(obj);
        return new this.put_response(this.put(id, obj));
    }
    _delete(id) {
        logger.debug(this._delete.name + ' start');
        return new this.delete_response(this.delete(id));
    }


    post(obj) {
        throw new NotImplemented();
    }
    get(id) {
        throw new NotImplemented();
    }
    put(id, obj) {
        throw new NotImplemented();
    }
    delete(id) {
        throw new NotImplemented();
    }
}


module.exports = BaseRestHandler;