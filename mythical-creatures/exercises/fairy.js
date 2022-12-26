
class Fairy {
    constructor(name) {
        this.name = name
        this.dust = 10
        this.clothes = {
            dresses: ['Iris']
        }
        this.disposition = 'Good natured'
        this.humanWards = []
        this.counter = 0
    }

    receiveBelief() {
        this.dust ++
    }

    believe() {
        this.dust += 10
    }

    makeDresses(dressArray) {
        for (var i = 0; i < dressArray.length; i++) {
            this.clothes.dresses.push(dressArray[i])
        }
    }

    becomeProvoked() {
        this.disposition =  'Vengeful'
    }

    replaceInfant(infant) {
        // console.log(infant)
        this.counter += 1
        if (this.counter <= 2) {
            infant.disposition = 'Malicious'
            this.humanWards.push(infant)
            return infant 
        } else {
            this.disposition = 'Good natured'
        }
    }





}




module.exports = Fairy;