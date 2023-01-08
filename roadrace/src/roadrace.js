class Roadrace {
  constructor(object) {
    console.log(object);
    this.name = object.title
    this.location = object.city
    this.distance = null
    this.participants = []
  }

  setDistance(length) {
    this.distance = length
    return `The ${this.name} in ${this.location} is a ${length} mile race.`  }

  registerParticipants(object) {
    // console.log(object);
    this.participants.push(object)

   
    
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name)
      // this.participants[i].milesRun += this.distance
      this.participants[i].runRace(this.name, this.distance)
    }

  }
}


module.exports = Roadrace;
