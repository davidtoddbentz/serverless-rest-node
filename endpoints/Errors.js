
class BaseError extends Error{

    constructor(id, message){
        super();
        this.id = id;
        this.message = message;
    }

    build(){
        return {"message":this.message, "id":this.id}
    }

}
exports.BaseError = BaseError;

class NotImplemented extends BaseError{

    constructor(){
        super(400, "Endpoint not implemented");
    }

}

exports.NotImplemented = NotImplemented;

class ClientError extends BaseError{

    constructor(message){
        super(400, message);
    }

}

exports.ClientError = ClientError;