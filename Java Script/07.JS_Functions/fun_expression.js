let calc = function(fno,sno,operator){
    let res = '';
    if(operator == '+')
      res = fno+sno;
    else if(operator == '-')
      res = fno-sno;
    else if(operator == 'x')
      res = fno*sno;
    else if(operator == '/')
      res = fno/sno;      
    else
      res='Invalid Operator';
      
    return res;  
}

//function calling
console.log('Sum = '+ calc(10,20,'+'))
console.log(`Product = ${calc(10,20,'x')}`)
console.log(`Diff = ${calc(10,20,'-')}`)
console.log(`${calc(10,20,'%')}`)