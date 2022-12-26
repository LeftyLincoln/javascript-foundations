
class Human {
    constructor(name) {
        this.name = name
        this.encounterCounter = 0
    }

    noticesOgre() {
        if (this.encounterCounter === 3) {
            return true
        } else if (this.encounterCounter < 6) {
            return false
        } else {
            return true
        }
        }   
    }




module.exports = Human;