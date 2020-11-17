const canvas = document.getElementById('polipod_canvas')
const context = canvas.getContext('2d')

let red = 0
let green = 0
let blue = 0

const squareColour = colour => {
    [red, green, blue] = colour

    red += Math.floor(Math.random() * 2)
    green += Math.floor(Math.random() * 2)
    blue += Math.floor(Math.random() * 2)

    red %= 256
    green %= 256
    blue %= 256

    return [red, green, blue]
}

const renderLoop = () => {
    [red, green, blue] = squareColour([red, green, blue])
    context.fillStyle = `rgb(${red}, ${green}, ${blue})`
    context.fillRect(10,10,50,50)

    window.requestAnimationFrame(renderLoop)
}

window.requestAnimationFrame(renderLoop)
