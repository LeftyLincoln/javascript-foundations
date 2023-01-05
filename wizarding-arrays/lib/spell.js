class Spell {
    constructor(name, description) {
        this.name = name
        this.description = description
        this.executionHistory = []
    }

    execute(toCast) {
        var castedSpells = []
        if (toCast instanceof Array) {
            for (var i = 0; i < toCast.length; i++) { 
                castedSpells.push(`Success! You've cast a spell on the ${toCast[i]}.`)
            }
        } else { 
            return `Success! You've cast a spell on the ${toCast}.`
        }
        return castedSpells.join(' ')
    } 
   
}

module.exports = Spell;