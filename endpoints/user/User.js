'use strict';
const BaseRestHandler = require('../BaseRestHandler.js');

const {PostRequest, PutRequest} = require('./models/Requests.js');
const {PostResponse, GetResponse, PutResponse, DeleteResponse} = require('./models/Responses.js');

class User extends BaseRestHandler {

    constructor(db){
        super(db, PostRequest, PostResponse, GetResponse,
            PutRequest, PutResponse, DeleteResponse);

    }

    post(obj) {
        this.db.create(obj);
        return obj;
    }

    get(id) {
        return this.db.read(id);
    }

    put(id, obj) {
        this.db.update(id, obj);
        return obj;
    }

    delete(id) {
        let obj = this.db.read(id);
        this.db.delete(id);
        return obj;
    }
}

exports.User = User;