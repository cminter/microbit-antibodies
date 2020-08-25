input.onButtonPressed(Button.A, function () {
    if (delay > delayMin) {
        delay = delay / 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (delay < delayMax) {
        delay = delay * 2
    }
})
let turnAngle = 0
let i = 0
let delay = 0
let delayMax = 0
let delayMin = 0
let turnChoices = [-90, 0, 90]
let ants: game.LedSprite[] = []
for (let index = 0; index < 5; index++) {
    ants.push(game.createSprite(2, 2))
}
delayMin = 25
delayMax = 800
delay = 200
basic.forever(function () {
    for (let ant of ants) {
        i = randint(0, turnChoices.length - 1)
        turnAngle = turnChoices[i]
        ant.turn(Direction.Left, turnAngle)
        ant.move(1)
        ant.ifOnEdgeBounce()
    }
    basic.pause(delay)
})
