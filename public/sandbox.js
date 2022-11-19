"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("Okkasha", "Website redesign", 500);
let invoiceList = [];
invoiceList.push(invoiceOne);
console.log(invoiceList);
