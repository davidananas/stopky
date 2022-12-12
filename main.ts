input.onButtonPressed(Button.A, function () {
	
})
let cislo = 0
let opakuj = 0
basic.forever(function () {
    while (opakuj == 0) {
        basic.clearScreen()
        basic.showNumber(cislo)
        basic.pause(1000)
        cislo += 1
    }
})
