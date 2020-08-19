//function defition with default value for function parameters [a new feature of ES6]
function addNum(a=0, b=0, c=0)
{
  let s = a+b+c;
  console.log(`${a}, ${b}, ${c} || Sum = ${s}`);  
}

//function calling with same number of arguments
addNum(1,2,3);
addNum(2,4,6);

//function calling with more number of arguments
addNum(10,20,30,40);

//function calling with less number of arguments
addNum(4,5);
addNum(2);
addNum();