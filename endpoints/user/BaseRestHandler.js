'use strict';

var requests = require('./BaseRequests.js');
var responses = require('./Baseresponses.js');


class BaseRestHandler {

    constructor(){

        this.POST = "POST";
        this.GET = "GET";
        this.PUT = "PUT";
        this.PATCH = "PATCH";
        this.DELETE = "DELETE";

        this.CreateRequest = requests.CreateRequest;
        this.UpdateRequest = requests.UpdateRequest;

        this.CreateResponse = responses.CreateResponse;
        this.UpdateResponse = responses.UpdateResponse;
        this.ReadResponse = responses.ReadResponse;
        this.DeleteResponse = responses.DeleteResponse;
    }

    call_method(event){

        switch (event.method) {
            case this.POST:
                return this.create(new CreateRequest(event.body));
            case this.GET:
                //return this.get(event.path);
                break;
            case this.PUT:
                return this.update(new UpdateRequest(event.body));
            case this.PATCH:
                return this.patch(new UpdateRequest(event.body));
            case this.DELETE:
                //return this.delete(event.path);
            default:
                return null;
        }
    }

    handle(event, context, callback){

        let ret = this.method_map[event.method];
        return { "message": ret.build() };
    }

    create(obj) {
        throw new TypeError("Do not call abstract method foo from child.");
    }
    read(id) {
        throw new TypeError("Do not call abstract method foo from child.");
    }
    update(obj) {
        throw new TypeError("Do not call abstract method foo from child.");
    }
    patch(obj) {
        throw new TypeError("Do not call abstract method foo from child.");
    }
    delete(id) {
        throw new TypeError("Do not call abstract method foo from child.");
    }
}



module.exports = BaseRestHandler;