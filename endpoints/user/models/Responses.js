"use strict";
var CreateResponse = (function () {
    function CreateResponse(id, name, phone, addresses) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
    return CreateResponse;
}());
exports.CreateResponse = CreateResponse;
var ReadResponse = (function () {
    function ReadResponse(id, name, phone, addresses) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
    return ReadResponse;
}());
exports.ReadResponse = ReadResponse;
var UpdateResponse = (function () {
    function UpdateResponse(id, name, phone, addresses) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
    return UpdateResponse;
}());
exports.UpdateResponse = UpdateResponse;
var DeleteResponse = (function () {
    function DeleteResponse(id, name, phone, addresses) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
    return DeleteResponse;
}());
exports.DeleteResponse = DeleteResponse;
