import { BaseResponse } from "../../BaseResponses";
export declare class PostResponse extends BaseResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(): {
        "id": number;
        "name": string;
        "phone": string;
        "addresses": string[];
    };
}
export declare class GetResponse extends BaseResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(): {
        "id": number;
        "name": string;
        "phone": string;
        "addresses": string[];
    };
}
export declare class PutResponse extends BaseResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(): {
        "id": number;
        "name": string;
        "phone": string;
        "addresses": string[];
    };
}
export declare class DeleteResponse extends BaseResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    build(): {
        "id": number;
        "name": string;
        "phone": string;
        "addresses": string[];
    };
}
