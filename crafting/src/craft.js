
class Craft {
    constructor(object) {
        console.log(object)
        this.name = object.type
        this.materials = object.materials   
        this.completed = false
    }

    completeCraft() {
        this.completed = true
        return 'All done! It looks great!'
    }

    calculateProjectTotal() {
        return 
    }

}

module.exports = Craft;
