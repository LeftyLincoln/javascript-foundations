var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true
    this.limit = limit
    this.skiers = []
    this.safetyBar = 'up'
  }

  admitSkier(name, hasTicket) {
    var skier = new Skier(name, hasTicket)
   
    if (this.skiers.length < this.limit && hasTicket) {
    this.skiers.push(skier)
    } else if (!hasTicket) {
      return `Sorry, ${name}. You need a lift ticket!`
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`
    }
  }

  startLift() {
    var diff = this.limit - this.skiers.length
    if (diff === 0) {
      this.safetyBar = 'down'
    } else if (diff === 1) {
      return 'We still need 1 more skier!'
    } else {
      return `We still need ${diff} more skiers!`
    }
}

}





module.exports = Lift;