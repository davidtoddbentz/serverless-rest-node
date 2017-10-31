"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const logger = log4js_1.getLogger('BaseResponse');
logger.level = 'debug';
class BaseResponse {
    constructor(data) {
        logger.debug('Constructing ' + this.constructor.name);
        logger.debug(JSON.stringify(data));
        Object.assign(this, data);
    }
    build() {
        throw new Error("Build not implemented");
    }
}
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=BaseResponses.js.map