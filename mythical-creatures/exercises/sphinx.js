class Sphinx {
    constructor() {
        this.riddles = []
        this.heroesEaten = 0
    }

    collectRiddle(riddle) {
        // console.log(riddle)
        if (this.riddles.length === 3) {
            this.riddles.shift()
            this.riddles.push(riddle)
        } else {
            this.riddles.push(riddle)
        }
    }

    attemptAnswer(answer) {
        for (var i = 0; i < this.riddles.length; i++) {
            if (answer === this.riddles[i].answer) {
                this.riddles.splice(i,1)
                    return this.riddles.length === 0 ? `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???` : 'That wasn\'t that hard, I bet you don\'t get the next one'
            } else {
                this.heroesEaten = 1
            }
        }
    }

}



module.exports = Sphinx;