export class CreateRequest {
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

export class UpdateRequest {
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

let s = new UpdateRequest('eee','','', null);
console.log(s.id);