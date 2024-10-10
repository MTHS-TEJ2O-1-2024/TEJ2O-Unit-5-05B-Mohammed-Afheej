/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed 
 * Created on: Oct
 * This program shows traffic lights 




*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // Green light
    basic.showIcon(IconNames.Happy)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green)) // Corrected: Green light should be on index 2
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(2000)

    // Clear lights
    neopixelStrip.clear()
    neopixelStrip.show()

    // Yellow light
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow)) // Yellow light on index 1
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(2000)

    // Clear lights
    neopixelStrip.clear()
    neopixelStrip.show()

    // Red light
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red)) // Corrected: Red light should be on index 0
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.pause(2000)

    // Clear lights
    neopixelStrip.clear()
    neopixelStrip.show()

    // Show happy face at the end
    basic.showIcon(IconNames.Happy)
})