export class Product {
    id: number;
    planename: string;
    description: string;
    price:number;
    validity:number;

    constructor(id,planename,description ='',price =0, validity =0){
        this.id = id
        this.planename = planename
        this.description = description
        this.price = price
        this.validity =  validity
    }
}
