class GolfCourse {
    constructor(course, challenge, spots, attractions) {
        this.name = course
        this.difficulty = challenge
        this.openings = spots
        this.features = attractions
        this.currentlyPlaying = []   
    }
    checkInGroup(group) {
        console.log(group)

        if (group.length <= this.openings) {
            for (var i = 0; i < group.length; i ++) {
                this.currentlyPlaying.unshift(group[i].name)
            }
            this.openings -= group.length
            return 'You\'re checked in. Have fun!'
        } else {
            return 'Sorry, we are currently booked! Please come back later.'
        }
    }
}

module.exports = GolfCourse;
