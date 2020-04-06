let calc = function(op1,op2,operator){
    let res=0
    if(operator == '+')
     res=op1+op2
    else if(operator == '-') 
     res=op1-op2
    else if(operator == '*')
     res=op1*op2
    else if(operator == '/')
     res=op1/op2
    else
     res='Invalid Operation'   

    console.log(res) 
}

//function call
calc(10,20,'+')
calc(10,20,'-')
calc(10,20,'*')
calc(10,20,'/')
calc(10,20,'?')