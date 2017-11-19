function createBasket() {
  return {
    items: []
  };
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function addItem(basket, name, price) {
  const newItems = clone(basket.items);
  return {
    items: [...newItems, { name, price }]
  };
}
