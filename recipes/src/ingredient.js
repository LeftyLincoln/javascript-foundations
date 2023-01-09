class Ingredient {
  constructor(object) {
    this.name = object.name
    this.amount = object.amount
  }
  changeAmount(number) {
    this.amount = number
  }
}

module.exports = Ingredient;
