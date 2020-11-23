import {renderLoop} from 'https://unpkg.com/@trichoplax/polipod_render_js@0.0.0/index.js'

const canvas = document.getElementById('polipod_canvas')
const context = canvas.getContext('2d')

const changeColourCheckbox = document.getElementById('change_colour')
let changeColourActive = changeColourCheckbox.checked
changeColourCheckbox.addEventListener('change', () => {
    changeColourActive = changeColourCheckbox.checked
})

const changeAngleCheckbox = document.getElementById('change_angle')
let changeAngleActive = changeAngleCheckbox.checked
changeAngleCheckbox.addEventListener('change', () => {
    changeAngleActive = changeAngleCheckbox.checked
})

window.requestAnimationFrame(renderLoop)
