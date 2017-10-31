'use strict';
const {PostRequest, PutRequest} = require('../endpoints/user/models/Requests.js');
const User = require('../endpoints/user/User.js');
const assert = require('chai').assert;
const MemoryDB = require('./MemoryDB.js');


describe("Testing Endpoints", function() {

    it("Post", function () {
        let users = new User(new MemoryDB());
        let id = 53423;
        let p = new PostRequest();
        p.name = "John";
        p.id = id;

        let event = {};
        event.httpMethod = "POST";
        event.body = JSON.stringify(p);

        users.handle(event, null, function(data){
            assert(data.id = id, "Post failed");
        });
    });

    it("Get", function () {
        let db = new MemoryDB();
        let p = new PostRequest();
        let id = 123;
        p.name = "John";
        p.id = id;
        db.create(p, function(error){

            let users = new User(db);
            let event = {};
            event.httpMethod = "GET";
            event.pathParameters = "123";

            users.handle(event, null, function (data) {
                assert(data && data.id === id, "Get failed");
            });

        });
    });

    it("PUT", function () {
        let db = new MemoryDB();
        let p = new PostRequest();
        let id = 123;
        p.name = "John";
        p.id = id;
        db.create(p, function(error){

            let users = new User(db);
            let event = {};
            let updateName = "JohnUpdated";
            event.httpMethod = "PUT";
            event.pathParameters = String(id);
            p.name = updateName;
            event.body = JSON.stringify(p);

            users.handle(event, null, function(data) {
                assert(data.name = updateName, "Name was not updated");
            });

        });
    });

    it("DELETE", function () {
        let db = new MemoryDB();
        let p = new PostRequest();
        p.name = "John";
        p.id = 123;
        db.create(p, function(error){

            let users = new User(db);

            let id = 123;
            let event = {};
            event.httpMethod = "DELETE";
            event.pathParameters = String(id);

            //assert(db.read(String(id)), "Setup fail, value not saved to DB");
            users.handle(event, null, function(data) {
                db.read(String(id), function(err, data){
                    assert(data == null,  "Setup fail, value not saved to DB");
                });
            });
        });
    });
});
