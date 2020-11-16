import {x} from './incrementer.js'

let count = 0

for (let i=0; i<3; i++) {
    alert(count += x)
}

alert('index.js present version 2')
