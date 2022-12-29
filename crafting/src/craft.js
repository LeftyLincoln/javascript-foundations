
class Craft {
    constructor(object) {
        console.log(object)
        this.name = object.type
        this.materials = [object]
        
    }
}

module.exports = Craft;
