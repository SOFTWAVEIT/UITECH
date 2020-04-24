let no1 = 12
let no2 = 10
console.log(`Sum = ${no1 + no2}`)
console.log(`Diff = ${no1 - no2}`)
console.log(`Product = ${no1 * no2}`)
console.log(`Division = ${no1 / no2}`) //1.2
console.log(`Division = ${BigInt(no1) / BigInt(no2)}`) //1

console.log(10 % 3) //1
console.log(-10 % 3) //-1
console.log(10 % -3) //1
console.log(-10 % -3) //-1

console.log(10/0) //Infinity
console.log(-10/0) //-Infinity
console.log(0/0) //NaN
console.log('ABC'/23) //NaN

console.log(10+20+30) //60

let x, y;
//x = y = (3 + 5) * 4 - 6; 
x = y = (3 + 5) - 4 * 6; 
console.log(x, y);