'use strict';
const BaseRestHandler = require('../BaseRestHandler.js');

const {PostRequest, PutRequest} = require('./models/Requests.js');
const {PostResponse, GetResponse, PutResponse, DeleteResponse} = require('./models/Responses.js');

const DB = require('./DB.js');

let DB_CONNECTION=null;
console.log(DB_CONNECTION);
if (!DB_CONNECTION)
    DB_CONNECTION = new DB();

class User extends BaseRestHandler {

    constructor(db){
        super(db, PostRequest, PostResponse, GetResponse,
            PutRequest, PutResponse, DeleteResponse);

    }

    post(obj) {
        console.log('oh');
        console.log(obj);
        this.db.create(obj);
        console.log(DB_CONNECTION);
        return obj;
    }

    get(id) {
        console.log(this.db);
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


module.exports.handler = (event, context, callback) => {

    callback(null, new User(DB_CONNECTION).handle(event, context, callback));

};

// let event = {};
// event.method = "POST";
// event.body =
//     {
//         "id":"hi",
//         "name":"namee"
//     };
// event.headers = {
//     "id":"5",
//     "name":"Paul's"
// };
//
// let db = new DB();
// console.log(new User(db).handle(event, null, null));
//
// event.method = "GET";
// event.path = "hi";
//
// event.headers = {
//     "id":"5",
//     "name":"Paul's"
// };
//
// console.log(new User(db).handle(event, null, null));



