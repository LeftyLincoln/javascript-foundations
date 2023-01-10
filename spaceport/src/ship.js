const Part = require("./part");
const Being = require("./being");

class Ship {
  constructor(shipObject) {
    this.name = shipObject.name
    this.type = shipObject.type
    this.captain = shipObject.captain
    this.maxCrew = shipObject.maxCrew
    this.odometer = shipObject.odometer || 0
    this.fuelCapacity = shipObject.fuelCapacity || 10
    this.fuel = 0
    this.crew = []
    this.cargo = []
    this.parts = shipObject.parts || {}
  }
  addCrew(crew) {    
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew && crew[i] instanceof Being) {
      this.crew.push(crew[i])
      }
    }
  }

  loadCargo(partObject) {
    if (partObject instanceof Part) {
    this.cargo.push(partObject)
    }
  }
  updatePart(partObject) {
    
  }
}

module.exports = Ship;