
function oddNumbersBetween() {
    //get reference of number fields
    let txtField1 = document.querySelector('#txtNum1')
    let txtField2 = document.querySelector('#txtNum2')

    //get the field values
    let num1 = txtField1.value
    let num2 = txtField2.value
    
    //convert string to number
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let res = ''

    if (num1 < num2) {
        let rem = num1 % 2
        if (rem == 0)
            num1++
        else
            num1 = num1 + 2

        let flag = 1
        while (num1 < num2) {
            if(flag == 1){
              res= res+num1
              flag++
            }
            else  
              res = res + ', '+num1            

            num1 = num1 + 2            
        }
    }
    else {
        res = 'Invalid Inputs...'
    }

    document.querySelector('#odd_nums').innerHTML = res
}    