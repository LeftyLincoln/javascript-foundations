var Dog = require("./dog.js");

class Person {
  constructor(name, object) {
    this.name = name
    this.dog = object
  }

  fillFoodBowl() {
    this.dog.hungry = false
  }

  throwBall() {
    if (this.dog.energyLevel > 3)
    this.dog.energyLevel -= 1
    return `${this.dog.name} loves playing fetch!`
  }

  introduceNewFriends(object) {
    // console.log(object)
    this.dog.friends.push(object.name)
  }

  adoptAPup(name, age) {
   if (this.dog) {
    return `You can\'t adopt ${name}. You already have ${this.dog.name}!`
   } else {
    this.dog = new Dog({name:name, age:age})
   }
  }
}

module.exports = Person;
