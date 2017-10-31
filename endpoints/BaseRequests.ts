import { getLogger } from 'log4js';
const logger = getLogger('BaseRequest');
logger.level = 'debug';

export class BaseRequest {
    constructor(data: object){
        logger.debug('Constructing ' + this.constructor.name);
        logger.debug(JSON.stringify(data));
        Object.assign(this, data);
    }
}