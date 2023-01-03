class LunchBox {
    constructor(object) {
        this.owner = object.owner
        this.material = object.madeOf
        this.shape = object.shape
        this.color = object.color
        this.snacks = []
    }
    acquireSnack(snackObj) {
    // console.log(snackObj)
    this.snacks.push(snackObj)
    return snackObj.isInLunchBox = true
    }

    findHealthySnacks() {
    
    }
}

module.exports = LunchBox;
