

const names = require('./4-names')
console.log(names)

const sayHi = require('./5-utils')
sayHi(names.n2)

console.log(require('./6-alternativeFlavor.js'))

console.log(require('./6-alternativeFlavor.js').singlePerson)
console.log(require('./6-alternativeFlavor.js').items)