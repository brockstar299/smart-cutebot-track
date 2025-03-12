basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        basic.showLeds(`
            . . . . .
            . # . . #
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        basic.showLeds(`
            . . . . .
            # . . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(20, 10)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(10, 20)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(20, 20)
    } else {
        cuteBot.motors(-20, -20)
    }
})
