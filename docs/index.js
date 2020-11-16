import {increment} from './incrementer.js'

let count = 0

for (let i=0; i<3; i++) {
    count = increment(count)
    alert(count)
}

alert('index.js present version 3')
