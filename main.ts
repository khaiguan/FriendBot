input.onPinPressed(TouchPin.P0, function () {
    Score += 1
    if (Score == Control) {
        for (let index = 0; index < 4; index++) {
            sb.transitionServoPosition(sb.servo(SBServo.ServoA), 70, 1, sb.easing(SBEasing.Linear))
            sb.transitionServoPosition(sb.servo(SBServo.ServoA), 40, 1, sb.easing(SBEasing.Linear))
        }
    } else {
        music.playMelody("F G F B C5 F E D ", 120)
        basic.showNumber(Score)
    }
})
input.onButtonPressed(Button.A, function () {
    Score = 0
    Control = randint(2, 10)
})
let Score = 0
let Control = 0
Control = randint(2, 10)
Score = 0
sb.setContinuousServoSpeed(sb.servo(SBServo.ServoA), 50)
sb.setServoPosition(sb.servo(SBServo.ServoA), 40)
basic.forever(function () {
	
})
