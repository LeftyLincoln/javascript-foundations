class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }

  fill(candy) {
    console.log(candy);
    this.candies.push(candy)
    this.count += 1
  }
  contains(type) {
    console.log(type);
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === type) {
        return true
      } else {
        return false
      }
    }
  }
}


module.exports = Bag;