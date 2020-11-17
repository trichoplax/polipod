import {squareColour} from './square_colour.js'

const canvas = document.getElementById('polipod_canvas')
const context = canvas.getContext('2d')

let red = 0
let green = 0
let blue = 0

const renderLoop = () => {
    [red, green, blue] = squareColour([red, green, blue])
    context.fillStyle = `rgb(${red}, ${green}, ${blue})`
    context.fillRect(10,10,50,50)

    window.requestAnimationFrame(renderLoop)
}

window.requestAnimationFrame(renderLoop)
