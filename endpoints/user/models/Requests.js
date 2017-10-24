"use strict";
var CreateRequest = (function () {
    function CreateRequest(id, name, phone, addresses) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
    return CreateRequest;
}());
exports.CreateRequest = CreateRequest;
var UpdateRequest = (function () {
    function UpdateRequest(id, name, phone, addresses) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
    return UpdateRequest;
}());
exports.UpdateRequest = UpdateRequest;
var s = new UpdateRequest('eee', '', '', null);
console.log(s.id);
