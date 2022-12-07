


class Vampire {
    constructor(vampName, vampPet) {
        this.name = vampName,
        this.pet = vampPet || 'bat'
        this.thirsty = true
        this.blood = 0
        this.ouncesDrank = 0
    }

    drink() {
        this.blood += 1
        if (this.blood > 0) {
            return this.thirsty = false
        }
    }


}






module.exports = Vampire;