"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRequests_1 = require("../BaseRequests");
class CreateRequest extends BaseRequests_1.BaseRequest {
    build() {
        return JSON.stringify(this);
    }
}
exports.CreateRequest = CreateRequest;
class UpdateRequest extends BaseRequests_1.BaseRequest {
}
exports.UpdateRequest = UpdateRequest;
//# sourceMappingURL=Requests.js.map