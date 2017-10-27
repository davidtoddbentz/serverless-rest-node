import {BaseResponse} from "../BaseResponses";

export class CreateResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}

export class ReadResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}

export class UpdateResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}

export class DeleteResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];
}
