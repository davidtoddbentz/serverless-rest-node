import {BaseRequest} from "../BaseRequests";

export class CreateRequest extends BaseRequest{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(){
        return JSON.stringify(this);
    }
}

export class UpdateRequest extends BaseRequest{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}