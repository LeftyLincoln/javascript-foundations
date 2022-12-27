var Human = require('../exercises/human');


class Ogre {
    constructor(object) {
        this.name = object.name
        this.home = object.abode || 'Swamp'
        this.swings = 0
        
    }

    encounter(name) {
        // console.log(name)
        name.encounterCounter += 1
        if (name.noticesOgre() === true) {
            this.swings += 1
            name.knockedOut = true
        } else {
            this.swings
        }
    }
    
    swingAt(name) {
      this.swings += 1
    }

    apologize(name) {
        name.knockedOut = false
    }
}

module.exports = Ogre;