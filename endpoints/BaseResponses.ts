import { getLogger } from 'log4js';
const logger = getLogger('BaseResponse');
logger.level = 'debug';

export class BaseResponse {
    constructor(data: object){
        logger.debug('Constructing ' + this.constructor.name);
        logger.debug(JSON.stringify(data));
        Object.assign(this, data);
    }

    build(){
        throw new Error("Build not implemented");
    }
}