'use strict';

class BaseRestHandler {

    constructor(){
        this.POST = "POST";
        this.GET = "GET";
        this.PUT = "PUT";
        this.PATCH = "PATCH";
        this.DELETE = "DELETE";
    }

    call_method(event){

        switch (event.method) {
            case this.POST:
                return this.create(event.body);
            case this.GET:
                //return this.get(event.path);
            case this.PUT:
                return this.update(event.body);
            case this.PATCH:
                return this.patch(event.body);
            case this.DELETE:
                //return this.delete(event.path);
            default:
                return null;
        }
    }

    handle(event, context, callback){
        this.headers = event.headers;
        let ret = this.call_method(event);
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