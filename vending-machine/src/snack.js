class Snack {
  constructor(name, amount) {
    this.name = name
    this.price = amount
    this.itemsInStock = 0
  }
  stockItems(number) {
    this.itemsInStock += number
  }
  removeItem() {
    if (this.itemsInStock > 0) {
    this.itemsInStock -= 1
    return `Item taken! There are now ${this.itemsInStock} items left.`
    } else {
      return  `Sorry, no ${this.name} left in stock!`
    }
  }

}

module.exports = Snack;
