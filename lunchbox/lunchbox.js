var Snack = require('./snack.js')

class LunchBox {
    constructor(object) {
        this.owner = object.owner
        this.material = object.madeOf
        this.shape = object.shape
        this.color = object.color
        this.snacks = []
    }
    acquireSnack(snackObj) {
    console.log(snackObj)
    this.snacks.push(snackObj)
    return snackObj.isInLunchBox = true
    }

    findHealthySnacks() {
    var goodFruit = []
    for (var i = 0; i < this.snacks.length; i++) {
        if (this.snacks[i].checkForHealthy()) {
            goodFruit.push(this.snacks[i].type)
        }
    } return goodFruit
    }
}

module.exports = LunchBox;
