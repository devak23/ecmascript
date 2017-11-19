// This is the functional style of programming
function createInvoice(invoiceNumber) {
  return { invoiceNumber, items: [] };
}

function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

function addItem(invoice, quantity, itemPrice, description) {
  const invoiceItems = clone(invoice.items);
  return {
    invoiceNumber: invoice.number,
    items: [...invoiceItems, { quantity, itemPrice, description }]
  };
}

function sum(invoice) {
  const reducer = (acc, item) => 
    acc + item.quantity * item.itemPrice;
  return invoice.items.reduce(reducer, 0);
}

let invoice1 = createInvoice(1);
let invoice2 = createInvoice(2);

invoice1 = addItem(invoice1, 2, 10, "T-Shirt");
invoice1 = addItem(invoice1, 3, 25, "Bag");

invoice2 = addItem(invoice2, 10, 1, "Light bulb");
invoice2 = addItem(invoice2, 2, 10, "Pillow");

console.log("Invoice1 sum:", sum(invoice1));
console.log("Invoice2 sum:", sum(invoice2));
