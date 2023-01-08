class Runner {
  constructor(name, age) {
  this.name = name 
  this.age = age
  this.milesRun = 0
  this.fitness = 25
  this.completedRaces = []
  }

  runSomeMiles(amount) {
  this.milesRun += amount
  this.fitness += amount
  }

  stretch() {
    this.fitness += .5
  }

  runRace(name, length) {    
    this.completedRaces.push(name)
    this.runSomeMiles(length)
    
  }



}

module.exports = Runner;
