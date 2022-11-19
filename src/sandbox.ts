class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("Okkasha", "Website redesign", 500);

let invoiceList: Invoice[] = [];

invoiceList.push(invoiceOne);

console.log(invoiceList);
