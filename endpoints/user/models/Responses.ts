export class CreateResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    constructor(id, name, phone, addresses){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
}

export class ReadResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    constructor(id, name, phone, addresses){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
}

export class UpdateResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    constructor(id, name, phone, addresses){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
}

export class DeleteResponse {
    id: number;
    name: string;
    phone: string;
    addresses: string[];
    constructor(id, name, phone, addresses){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.addresses = addresses;
    }
}
