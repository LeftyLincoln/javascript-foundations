
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
        if (this.confidencePercentage === 110 && this.assistant === true) {
            return 'WOW! The magician totally just sawed that person in half!'
        } else {
            return  'Oh no, this trick is not ready!'
        }
        
    
        
    }


}





module.exports = Magician;