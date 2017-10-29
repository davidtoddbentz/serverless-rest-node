"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseResponse {
    constructor(data) {
        Object.assign(this, data);
    }
    build() {
        throw new Error("Build not implemented");
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=BaseResponses.js.map