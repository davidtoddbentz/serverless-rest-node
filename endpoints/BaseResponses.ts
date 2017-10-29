export class BaseResponse {
    constructor(data: object){
        Object.assign(this, data);
    }

    build(){
        throw new Error("Build not implemented");
    }
}