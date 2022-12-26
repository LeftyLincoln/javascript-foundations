var Human = require('../exercises/human');


class Ogre {
    constructor(object) {
        this.name = object.name
        this.home = object.abode || 'Swamp'
    }

    encounter(name) {
        // console.log(name)
        name.encounterCounter += 1
    }
}


module.exports = Ogre;