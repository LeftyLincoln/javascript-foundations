class VendingMachine {
  constructor(vendObject) {
    console.log(vendObject);
    this.id = vendObject.id
    this.isBroken = vendObject.isBroken
    this.snacks = []
  }
  addSnacks(snackObject) {
    for (var i = 0; i < this.snacks.length; i++) {
      if(!this.snacks.name === snackObject.name) {
      this.snacks.push(snackObject)
    }
    } 

    } 
    
  }

module.exports = VendingMachine;
