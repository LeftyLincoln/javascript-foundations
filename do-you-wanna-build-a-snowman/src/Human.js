var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        // console.log(name)
        this.name = name
        this.wantsToBuildASnowman = true
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        }
    }


    gatherMaterials(type, amount) {
        this.materials[type] += amount

    }

    buildASnowman() {
        return new Snowman({
            coal: this.materials.coal,
            carrots: this.materials.carrots,
            snowballs: this.materials.snowballs,
            buttons: this.materials.buttons
        })     
    }
    placeMagicHat(object) {
        if (object.coal < 2 || object.buttons < 5 
            || object.carrots < 1 || object.snowballs < 2) {
             object.magicHat = false
             return 'I guess I didn\'t build it correctly.'
            } else {
                object.magicHat = true
                return 'Woah, this snowman is coming to life!'
            }   
    }
}

module.exports = Human;