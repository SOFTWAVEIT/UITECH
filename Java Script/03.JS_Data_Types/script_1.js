let firstName='Sunil'
console.log(firstName+" - "+ typeof(firstName)) //old style -ES5
console.log(`${firstName} - ${typeof firstName}`) //new style -ES6

firstName="Sunil"
console.log(`${firstName} - ${typeof firstName}`)

let age=35
console.log(`${age} - ${typeof(age)}`)

age=35.5
console.log(`${age} - ${typeof(age)}`)

age=35n
console.log(`${age} - ${typeof(age)}`)

console.log(10/3)
console.log(10n/3n)
console.log(BigInt(10)/BigInt(3))

let isWorking = false
console.log(`${isWorking} - ${typeof isWorking}`)

let data
console.log(`${data} - ${typeof(data)}`)

data = null
console.log(`${data} - ${typeof(data)}`)

console.log(`${typeof(alert)}`)

/* difference between undefined & null */
let n1
let n2 = null
console.log(`${typeof n1 } - ${typeof n2}`)

console.log(`${n1 == n2}`) //checks for content only
console.log(`${n1 === n2}`) //check for content and type
