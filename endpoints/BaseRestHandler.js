'use strict';

const BaseDB = require('./BaseDB.js');

const {BaseError, NotImplemented} = require('./user/Errors.js');

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
    }

    call_method(event){

        switch (event.method) {
            case this.POST:
                return this._post(event.body);
            case this.GET:
                return this._get(event.path);
            case this.PUT:
                return this._put(event.path, event.body);
            case this.DELETE:
                return this._delete(event.path);
            default:
                return null;
        }
    }

    handle(event, context, callback){
        try {
            this.headers = event.headers;
            let ret = this.call_method(event);
            return {"message": ret.build()};
        }
        catch(error)
        {
            if (error instanceof BaseError){
                return error.build();
            }
            else{
                console.log(error);
                return {"message":"Server Error", "id":500}
            }
        }
    }


    _post(obj) {
        obj = new this.post_request(obj);
        return new this.post_response(this.post(obj));
        
    }
    _get(id) {
        return new this.get_response(this.get(id));
    }
    _put(id, obj) {
        obj = new this.put_request(obj);
        return new this.put_response(this.put(id, obj));
    }
    _delete(id) {
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