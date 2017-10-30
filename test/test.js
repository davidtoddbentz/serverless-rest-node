'use strict';
const {PostRequest, PutRequest} = require('../endpoints/user/models/Requests.js');
const {User} = require('../endpoints/user/User.js');
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

        let ret = users.handle(event, null, null);
        assert(ret.id = id, "Post failed");
    });

    it("Get", function () {
        let db = new MemoryDB();
        let p = new PostRequest();
        let id = 123;
        p.name = "John";
        p.id = id;
        db.create(p);

        let users = new User(db);
        let event = {};
        event.httpMethod = "GET";
        event.path = "123";

        let ret = users.handle(event, null, null);
        assert(ret.id = id, "Get failed");
    });

    it("PUT", function () {
        let db = new MemoryDB();
        let p = new PostRequest();
        let id = 123;
        p.name = "John";
        p.id = id;
        db.create(p);

        let users = new User(db);
        let event = {};
        let updateName = "JohnUpdated";
        event.httpMethod = "PUT";
        event.path = String(id);
        p.name = updateName;
        event.body = JSON.stringify(p);

        let ret = users.handle(event, null, null);
        assert(ret.name = updateName, "Name was not updated");
    });

    it("DELETE", function () {
        let db = new MemoryDB();
        let p = new PostRequest();
        p.name = "John";
        p.id = 123;
        db.create(p);

        let users = new User(db);

        let id = 123;
        let event = {};
        event.httpMethod = "DELETE";
        event.path = String(id);

        assert(db.read(String(id)), "Setup fail, value not saved to DB");
        let ret = users.handle(event, null, null);
        assert(db.read(String(id)) == null, "Setup fail, value not saved to DB");
    });
});
