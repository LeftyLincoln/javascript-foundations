
class Dog {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
    this.counter = 0;
  }
  eat() {
    this.counter++;
    if (this.counter === 1) {
      this.hungry = false;
      return 'Yum!';
    } else if (this.counter === 2 ) {
      return 'I refuse to eat.';
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

  sleep() {
    if (this.energyLevel < 10) {
      this.energyLevel += 1
    } else {
      return  'I have too much energy to rest. I\'m going to chew something instead.'
    }
  }

  makeNewFriend(object) {
    // console.log(object)
    this.friends.push(object.name)
  }

}


module.exports = Dog;
