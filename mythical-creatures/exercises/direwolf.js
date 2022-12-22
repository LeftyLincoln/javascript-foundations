var Stark = require('./stark');

class Direwolf {
    constructor(name, home, size) {
        this.name = name
        this.home = home || 'Beyond the Wall'
        this.size = size || 'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true
        
    }
    protect(lord) {
        // console.log(lord)
        if (this.home === lord.location && this.starksToProtect.length <= 1) {
        this.starksToProtect.push(lord)
        lord.safe = true
        this.huntsWhiteWalkers = false
        }
    }
    leave(lord) {
        if (lord.safe) {
            this.starksToProtect.pop()
            lord.safe = false
        }
    }


}




module.exports = Direwolf