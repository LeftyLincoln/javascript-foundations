class Golfer {
    constructor(golfObject) {
        // console.log(golfObject)
        this.name = golfObject.name
        this.handicap = golfObject.handicap
        this.frustration = 0
        this.confidence = 0
    }

    calculateAvg(score) {
        return `I usually shoot a ${score + this.handicap} on average.`
    }

    playRound(golfCourse) {
        if (golfCourse.difficulty === 'hard') {
            this.frustration += 500
        } else {
            this.frustration += 100
        }
    }
   
    hitTheRange() {
        this.confidence += 10
    }

    marvel(golfCourse) {
        // console.log(golfCourse)
        return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
    }

    whatYaShoot(holeScore) {
        if (holeScore === 4) {
            this.frustration = 20
            return 'Doh!'
        } else if (holeScore === 0) {
            this.frustration = 10
            return 'Booyah!'
        } else if (holeScore === 2) {
            this.frustration = 30
            return 'Doh!'
        } else if (holeScore === 3) {
            this.frustration = 20
            return 'Doh!'
        } else if (holeScore === -1 || -2) {
            this.frustration = 0
            return 'I AM THE GREATEST GOLFER ALIVE!'
        }
    }
}



module.exports = Golfer;
