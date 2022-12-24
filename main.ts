function pokyn () {
    while (opakuj == 0) {
        basic.clearScreen()
        basic.showNumber(cislo)
        basic.pause(1000)
        cislo += 1
    }
}
input.onButtonPressed(Button.A, function () {
    opakuj = 0
    pokyn()
})
input.onButtonPressed(Button.B, function () {
    opakuj = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let opakuj = 0
let cislo = 0
cislo = 0
opakuj = 0
