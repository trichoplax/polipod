import increment from './incrementer'

count = 0

for (i=0; i<3; i++) {
    alert(count += increment)
}

alert('index.js present')
