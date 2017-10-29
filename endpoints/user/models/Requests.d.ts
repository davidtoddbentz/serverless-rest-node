import { BaseRequest } from "../../BaseRequests";
export declare class PostRequest extends BaseRequest {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(): string;
}
export declare class PutRequest extends BaseRequest {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}
