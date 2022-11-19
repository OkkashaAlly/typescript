class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("Okkasha", "Website redesign", 500);

let invoiceList: Invoice[] = [];

invoiceList.push(invoiceOne);

console.log(invoiceList);
