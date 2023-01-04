class Wand {
    constructor(type, size, material) {
        this.type = type
        this.size = size
        this.core = material

    }
    cast(spell) {
        return `Casting ${spell}!`
    }

}


module.exports = Wand;