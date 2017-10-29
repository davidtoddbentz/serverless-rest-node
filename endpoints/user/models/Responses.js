"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseResponses_1 = require("../../BaseResponses");
class PostResponse extends BaseResponses_1.BaseResponse {
    build() {
        return {
            "id": this.id,
            "name": this.name,
            "phone": this.phone,
            "addresses": this.addresses
        };
    }
}
exports.PostResponse = PostResponse;
class GetResponse extends BaseResponses_1.BaseResponse {
    build() {
        return {
            "id": this.id,
            "name": this.name,
            "phone": this.phone,
            "addresses": this.addresses
        };
    }
}
exports.GetResponse = GetResponse;
class PutResponse extends BaseResponses_1.BaseResponse {
    build() {
        return {
            "id": this.id,
            "name": this.name,
            "phone": this.phone,
            "addresses": this.addresses
        };
    }
}
exports.PutResponse = PutResponse;
class DeleteResponse extends BaseResponses_1.BaseResponse {
    build() {
        return {
            "id": this.id,
            "name": this.name,
            "phone": this.phone,
            "addresses": this.addresses
        };
    }
}
exports.DeleteResponse = DeleteResponse;
//# sourceMappingURL=Responses.js.map