const { run } = require("mocha")


class Centaur {
    constructor(person) {
        this.name = person.name
        this.breed = person.type
        this.cranky = false
        this.standing = true
    }
    run() {
        return 'Clop clop clop clop!!!'
    }
    run() {
        return 'Clop clop clop clop!!!'
    }
    shootBow() {
        this.cranky = true
        return 'NO!'
       }
        
    }

    
   



module.exports = Centaur;