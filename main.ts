input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 A B G A F G E ", 240)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showRainbow(1, 300)
    basic.clearScreen()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showRainbow(1, 300)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
