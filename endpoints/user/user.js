'use strict';

let BaseRestHandler = require('./BaseRestHandler.js')

let requests = require('./BaseRequests.js');
let responses = require('./Baseresponses.js');

class User extends BaseRestHandler {

    constructor(){
        super();

        console.log(typeof(requests.CreateRequest));
        var s = new requests.UpdateRequest('eee', '', '', null);
        console.log(s.id);
        this.CreateRequest = requests.CreateRequest;
        this.UpdateRequest = requests.UpdateRequest;

        this.CreateResponse = responses.CreateResponse;
        this.UpdateResponse = responses.UpdateResponse;
        this.ReadResponse = responses.ReadResponse;
        this.DeleteResponse = responses.DeleteResponse;
    }
    create(obj) {
        console.log(typeof(this.CreateRequest));
        console.log(new this.CreateRequest('y;', null, null, null).name);
        console.log("stuff");
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
    return new User()
        .handle(event, context, callback);

};

new User().create();