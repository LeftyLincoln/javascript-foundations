class Skatepark {
    constructor(object) {
        // console.log(object)
        this.name = object.name
        this.yearFounded = object.year
        this.style = object.type
        this.features = object.features
        this.isPrivate = object.isPrivate || false
        this.cost = object.price || 0
        this.occupants = []
    }

    admit (object) {
        
        if (this.isPrivate) {
            if (this.cost > object.money) {
                return `Sorry, you don't have enough money.`
            } if (this.occupants.length === 3) {
                return'Sorry, we are at max capacity. Thank you for understanding.'
            }
            object.money -= this.cost
            this.occupants.push(object)
            return  `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
        } else {
            this.occupants.push(object)
            return `Welcome to the free ${this.name} Skatepark!`
        }
    }

}

module.exports = Skatepark;