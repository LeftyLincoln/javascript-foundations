class Dog {
  constructor(dogObject) {
    // console.log(dogobject)
    this.name = dogObject.name
    this.age = dogObject.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
  }
  eat() {
    if (this.hungry) {
      this.hungry = false
      return 'Yum!'
    } else {
      return 'I refuse to eat.'
      }  
  }

  fetchBall() {
    if (this.energyLevel > 3) {
      this.energyLevel -= 1
      return 'This is fun!'
    } else {
      return 'Nah, I\'m going to sleep instead.'
    }
  }

  makeNewFriend(object) {
    // console.log(object)
    this.friends.push(object.name)
  }



}


module.exports = Dog;
