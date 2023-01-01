let sonar = 0
basic.showIcon(IconNames.House)
basic.forever(function () {
    if (input.lightLevel() < 30) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    }
    basic.pause(1000)
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.playTone(220, music.beat(BeatFraction.Quarter))
        }
        basic.pause(2000)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(500)
    } else {
        cuteBot.motors(50, 50)
    }
})
