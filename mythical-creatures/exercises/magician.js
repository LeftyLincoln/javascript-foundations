
class Magician {
    constructor({name, assistant, clothing}) {
        this.name = `The Great ${name}`
        this.assistant = assistant
        this.favoriteAccessory = clothing || 'top hat'  
        this.confidencePercentage = 10
    }

    performIncantation(spell) {
        return `${spell.toUpperCase()}!`
    }

    performTrick() {
        this.confidencePercentage += 10
        if (this.favoriteAccessory === 'cape') {
            return 'PULL DOVE FROM SLEEVE'
        } else {
            return 'PULL RABBIT FROM TOP HAT'
          }
    }

    performShowStopper()  {
        if ()          
        return 'WOW! The magician totally just sawed that person in half!'
    }


}





module.exports = Magician;