input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Heart)
    colpo_davanti = true
    colpo_dietro += 1
    basic.pause(100)
    basic.clearScreen()
})
let colpo_dietro = 0
let colpo_davanti = false
servos.P0.setAngle(0)
servos.P1.setAngle(0)
colpo_davanti = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.stop()
        servos.P1.stop()
    }
})
basic.forever(function () {
    if (colpo_davanti == false) {
        servos.P0.setAngle(180)
        basic.pause(1500)
        servos.P0.setAngle(0)
        basic.pause(1000)
    } else if (colpo_davanti == true) {
        basic.showIcon(IconNames.Butterfly)
        servos.P0.setAngle(90)
        basic.pause(1500)
        servos.P0.setAngle(0)
        basic.pause(1500)
    }
    if (colpo_dietro == 2) {
        servos.P0.stop()
        servos.P1.stop()
    }
})
basic.forever(function () {
    if (colpo_davanti == false) {
        basic.pause(1000)
        servos.P1.setAngle(90)
        basic.pause(1500)
        servos.P1.setAngle(0)
    } else if (colpo_davanti == true) {
        basic.showIcon(IconNames.Butterfly)
        servos.P1.setAngle(0)
        basic.pause(1500)
        servos.P1.setAngle(180)
        basic.pause(1500)
    }
    if (colpo_dietro == 2) {
        servos.P0.stop()
        servos.P1.stop()
    }
})
