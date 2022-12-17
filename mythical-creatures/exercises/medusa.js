var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(creature) {
      this.name = creature
      this.statues = []
    }
    
    gazeAtVictim(person) {
      var statue = new Statue(person.name)

      if(this.statues.length < 3) {
      this.statues.push(statue)  
      } else if(this.statues.length === 3) {
        // console.log('statues array before: ',this.statues)
        // console.log('single statue: ', statue)
        var person = new Person(this.statues[0].name)
        // console.log('new person:', person)
        this.statues.shift()  
        // console.log('statues array after shift: ',this.statues)
        this.statues.push(statue)
        // console.log('statues array after push: ',this.statues)
        person.mood = 'relieved'
        return person
      }
    }
    
    

    

}






module.exports = Medusa;