


class Vampire {
    constructor(vampName, vampPet) {
        this.name = vampName,
        this.pet = vampPet || 'bat'
        this.thirsty = true
        this.ouncesDrank = 0
    }

    drink() {
        if(this.ouncesDrank === 50) {
            return 'I\'m too full to drink anymore!'
         }
        this.ouncesDrank += 10 
        this.thirsty = false
    }
}






module.exports = Vampire;