"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRequests_1 = require("../../BaseRequests");
class PostRequest extends BaseRequests_1.BaseRequest {
    build() {
        return JSON.stringify(this);
    }
}
exports.PostRequest = PostRequest;
class PutRequest extends BaseRequests_1.BaseRequest {
}
exports.PutRequest = PutRequest;
//# sourceMappingURL=Requests.js.map