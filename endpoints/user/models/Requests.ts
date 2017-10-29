import {BaseRequest} from "../../BaseRequests";

export class PostRequest extends BaseRequest{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(){
        return JSON.stringify(this);
    }
}

export class PutRequest extends BaseRequest{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}