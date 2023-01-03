
class Craft {
    constructor(object) {
        this.name = object.type
        this.materials = object.materials   
        this.completed = false
    }

    completeCraft() {
        this.completed = true
        return 'All done! It looks great!'
    }

    calculateProjectTotal() {
       return this.materials[0].calculateMaterialCost() + this.materials[1].calculateMaterialCost()
    }

}

module.exports = Craft;
