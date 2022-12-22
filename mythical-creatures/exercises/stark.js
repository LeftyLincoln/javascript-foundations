class Stark {
    constructor(lord) {
        this.name = lord.name
        this.location = lord.area || 'Winterfell'
    }
}

module.exports = Stark;