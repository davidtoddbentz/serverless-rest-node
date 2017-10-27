'use strict';
const BaseRestHandler = require('./BaseRestHandler.js');

const {CreateRequest, UpdateRequest} = require('./models/Requests.js');
const {CreateResponse, ReadResponse, UpdateResponse, DeleteResponse} = require('./models/Responses.js');

class User extends BaseRestHandler {

    create(obj) {
        console.log(this.headers.id);
        obj = new CreateRequest(obj);
        return obj;
    }

    read(id) {
    }

    update(obj) {
    }

    patch(obj) {
    }

    delete(id) {
    }
}


module.exports.hanlder = (event, context, callback) => {

    return new User().handle(event, context, callback);

};

let event = {}
event.method = "POST";
event.body =
    {
        "id":"hi",
        "name":"namee"
    };
event.headers = {
    "id":"5",
    "name":"Paul's"
}
console.log(new User().handle(event, null, null));