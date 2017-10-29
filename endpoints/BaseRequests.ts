import { getLogger } from 'log4js';
const logger = getLogger();
logger.level = 'debug';

export class BaseRequest {
    constructor(data: object){
        logger.debug('Constructing ' + this.constructor.name);
        logger.debug(data.toString());
        Object.assign(this, data);
    }
}