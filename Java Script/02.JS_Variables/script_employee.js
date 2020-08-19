let empno = 101;
let name = 'Sunil Joseph';
let sal = 25000.50;

console.log('Employee No: ' + empno);
console.log(`Employee Name: ${name}`);
console.log(`Salary: ${sal}`)

console.log(`-------------------`);
let details = `Employee No: ${empno} \nEmployee Name: ${name}\nSalary: ${sal}`;
console.log(details);

details = `Employee No: ${empno} <br>Employee Name: ${name} <br>Salary: ${sal}`;
//document.getElementById('emp_details').innerText = details
document.getElementById('emp_details').innerHTML = details