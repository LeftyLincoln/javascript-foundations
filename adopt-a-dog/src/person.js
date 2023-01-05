var Dog = require("./dog.js");

class Person {
  constructor(owner, dogObject) {
    // console.log(dogObject)
    this.name = owner
    this.dog = dogObject
  }
  fillFoodBowl() {
    this.dog.hungry = false
    //could also use this.dog.eat() which does the same thing
    //we have access to either here. 
  }

  throwBall() {
    this.dog.fetchBall()
    return `${this.dog.name} loves playing fetch!`
  }

  introduceNewFriends(object) {
    // this.dog.friends.push(object.name) or
    this.dog.makeNewFriend(object)
  }

  adoptAPup(name, age) {
    var newPup = new Dog({name:name, age:age})

    if (this.dog) {
      return `You can\'t adopt ${name}. You already have ${this.dog.name}!`
    } else {
      this.dog = newPup
    }
  }

}

module.exports = Person;
