export class BaseResponse {
    constructor(data: object){
        Object.assign(this, data);
    }
}