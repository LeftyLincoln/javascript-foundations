class Dragon {
    constructor(name, rider) {
        this.name = name
        this.rider = rider
        this.hungry = true
    
    }

    greet() {
       return `Hi, ${this.rider}!`
    
    }

    eat() {
        if(this.hungry >= 3) {
            return this.hungry
        } else {
            return false
            }
    }
}

module.exports = Dragon;
