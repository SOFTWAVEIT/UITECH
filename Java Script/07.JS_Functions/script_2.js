//function defintion with default parameter values
function addNum(x=0, y=0, z=0){
    let sum = x+y+z
    console.log(`${x}, ${y}, ${z} | Sum = ${sum}`)
}

//function call
addNum(1,2,3)

//function call with more number of parameters
addNum(1,2,3,4,5)

//function call with less number of parameters
addNum(1,2)
addNum()