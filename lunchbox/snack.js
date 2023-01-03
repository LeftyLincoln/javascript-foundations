class Snack {
    constructor(snack) {
        console.log(snack)
        this.deliciousLevel = "extra"
        this.type = snack
        this.amount = 100
        this.isInLunchBox = false
        this.cuttingItClose = false
    }

    getEaten() {
        this.amount -= 10
        if (this.amount <= 20) {
            this.cuttingItClose = true
        }
     }
}

module.exports = Snack;
