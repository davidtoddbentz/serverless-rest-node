"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const logger = log4js_1.getLogger('BaseRequest');
logger.level = 'debug';
class BaseRequest {
    constructor(data) {
        logger.debug('Constructing ' + this.constructor.name);
        logger.debug(JSON.stringify(data));
        Object.assign(this, data);
    }
}
exports.BaseRequest = BaseRequest;
//# sourceMappingURL=BaseRequests.js.map