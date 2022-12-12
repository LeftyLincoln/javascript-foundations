
class Magician {
    constructor({name, assistant, clothing}) {
        this.name = `The Great ${name}`
        this.assistant = assistant
        this.favoriteAccessory = clothing || 'top hat'  
    }

    performIncantation(spell) {
        return `${spell.toUpperCase()}!`
    }

    performTrick(spells) {
        return spells
    }


}





module.exports = Magician;