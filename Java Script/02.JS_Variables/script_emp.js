/* 3 variables to store employee details */
let empno = 101
let name = 'Sunil Joseph'
let sal = 25000.5

/* display employee details */
console.log(`Employee No: ${empno}`)
console.log(`Employee Name: ${name}`)
console.log(`Salary: ${sal}`)

/*
console.log(document.getElementById('emp_details').innerHTML) //getting content

document.getElementById('emp_details').innerHTML = `Employee No: ${empno}<br><br>Employee Name: ${name}<br><br>Salary: ${sal}` //setting content
*/

let element_ref = document.getElementById('emp_details')
console.log(element_ref.innerHTML)
element_ref.innerHTML = `Employee No: ${empno}<br><br>Employee Name: ${name}<br><br>Salary: ${sal}`
