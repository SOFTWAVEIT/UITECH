/*
let greet = function(){
    console.log('Welcome to Softwave IT')
}
*/

let greet = ()=>{
    console.log('Welcome to Softwave IT')
}
greet() //function call

let add = (x=0,y=0)=>{
    let sum = x+y;
    console.log(`${x} + ${y} = ${sum}`)
}
add(10,20)
add(10)

let addNum = (x=0,y=0)=>{
    return x+y
}
console.log(`Sum = ${addNum(12,32)}`)


//function to display first n natural numbers
let displaySequences = (n)=>{
    let res=''
    for(let i=1;i<=n;i++){
        if(i==1)
         res=res+i
        else
         res=`${res}, ${i}` 
    }
    return res
}

console.log(displaySequences(10))
console.log(displaySequences(25))

let printSequnces = (startNo, endNo, step)=>{
    let res=''
    for(let i=startNo;i<=endNo;i+=step){
        res=`${res}${i} | ` 
    }
    return res   
}

console.log(printSequnces(5,50,2))