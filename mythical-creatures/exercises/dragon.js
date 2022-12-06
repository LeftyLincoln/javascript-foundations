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
       if (this.name.hungry.count >= 3) {
        return this.hungry = false
       }
    } 
    
    
}

module.exports = Dragon;
