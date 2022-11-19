"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Okkasha", "Website redesign", 500);
let invoiceList = [];
invoiceList.push(invoiceOne);
console.log(invoiceList);
