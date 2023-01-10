class Part {
  constructor(partObject) {
    this.name = partObject.name
    this.type = partObject.type
    this.value = partObject.value
    this.broken = false
    this.isValid = false

    if (this.name && this.type && this.value) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  checkForValidity() {
    if (!this.type) {
        return 'This part needs a type!'
    } else if (!this.value) {
      return 'This part needs a value!'
    }  else {
      this.isValid = false
      return  'This part needs a name!'
    } 
  }
}


module.exports = Part;