
class Dog {
  constructor({name: dogName, age: dogAge}) {
    this.name = dogName;
    this.age = dogAge;
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
}


module.exports = Dog;
