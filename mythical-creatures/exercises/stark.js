const Direwolf = require("./direwolf")

class Stark {
    constructor(lord) {
        this.name = lord.name
        this.location = lord.area || 'Winterfell'
        this.safe = false
    }

    sayHouseWords() {
        if (this.safe) {
            return 'The North Remembers'
        } else {
            return 'Winter is Coming'
        }
}
    callDirewolf(name, location) {
        new Direwolf
        
    }

    
}



module.exports = Stark;