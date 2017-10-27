import { BaseRequest } from "../BaseRequests";
export declare class CreateRequest extends BaseRequest {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(): string;
}
export declare class UpdateRequest extends BaseRequest {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}
