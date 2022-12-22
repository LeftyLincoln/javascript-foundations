const { run } = require("mocha")


class Centaur {
    constructor(person) {
        this.name = person.name
        this.breed = person.type
        this.cranky = false
        this.standing = true
        this.counter = 0
        this.standing = true
        this.layingDown = false
    }
   
    shootBow() {
        if (this.cranky || this.layingDown) {
        return 'NO!'
        } 
        this.counter += 1
        if (this.counter >= 3) {
            this.cranky = true
        }
        return 'Twang!!!'
    }

    run() {
        if (this.cranky || this.layingDown) {
            return 'NO!'
        } 
        this.counter += 1
        if (this.counter >= 3) {
        this.cranky = true
    }
     return 'Clop clop clop clop!!!'
    }

    sleep() {
        if (this.standing){
            return 'NO!'
        } else {
            this.cranky = false
            return 'ZZZZ'
        }
    }

    layDown() {
    this.standing = false
    this.layingDown = true
    }

    standUp() {
    this.standing = true
    this.layingDown = false
    }

    drinkPotion() {
        if (this.layingDown) {
            return 'Not while I\'m laying down!'
        }
        this.cranky = false
    }



   

    }    
   



module.exports = Centaur;