import {BaseResponse} from "../../BaseResponses";

export class PostResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];

    build(){
        return {
            "id":this.id,
            "name":this.name,
            "phone":this.phone,
            "addresses":this.addresses
        }
    }
}

export class GetResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];

    build(){
        return {
            "id":this.id,
            "name":this.name,
            "phone":this.phone,
            "addresses":this.addresses
        }
    }
}

export class PutResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];

    build(){
        return {
            "id":this.id,
            "name":this.name,
            "phone":this.phone,
            "addresses":this.addresses
        }
    }
}

export class DeleteResponse extends BaseResponse{
    id: number;
    name: string;
    phone: string;
    addresses: string[];

    build(){
        return {
            "id":this.id,
            "name":this.name,
            "phone":this.phone,
            "addresses":this.addresses
        }
    }
}
