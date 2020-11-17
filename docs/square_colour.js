export const squareColour = colour => {
    let red, green, blue
    [red, green, blue] = colour

    red += Math.floor(Math.random() * 2)
    green += Math.floor(Math.random() * 2)
    blue += Math.floor(Math.random() * 2)

    red %= 256
    green %= 256
    blue %= 256

    return [red, green, blue]
}