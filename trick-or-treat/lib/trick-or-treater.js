class TrickorTreater {
  constructor(costumeObject, bagObject) {
// console.log(costumeObject);
console.log(bagObject);
  this.dressedUpAs = costumeObject.style
  this.bag = bagObject
  this.hasCandy = false
  this.countCandies = 0
  }
  putCandyInBag(candyObj) {
    console.log(candyObj);
    this.hasCandy = true
    this.countCandies += 1
    this.bag.fill(candyObj.name)
  }
  eat() {
  this.countCandies -= 1
  this.bag.candies.pop()
  }
}



module.exports = TrickorTreater;