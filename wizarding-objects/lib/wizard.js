class Wizard {
    constructor(object) {
        // console.log(object)
       this.name = object.name
       this.petsCount = 0
       this.pets = []
       this.wand = null

    }

    adoptPet(type) {
    // console.log(type)
    this.petsCount += 1
    this.pets.push(type)
    }

    petList() {
        return `A ${this.pets[0].type} named ${this.pets[0].name}; An ${this.pets[1].type} named ${this.pets[1].name}.`
    }

    getWand(wandObject) {
        console.log(wandObject)
        this.wand = wandObject
    }

    castSpell(spell) {
        return `Casting ${spell}!`    
    }

}


module.exports = Wizard;