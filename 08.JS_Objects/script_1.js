/*creating an empty object*/
let emp = {}
console.log(emp)
console.log(`Type = ${typeof emp}`)

//to assign some properties
emp.empNo = 101
emp.empName = 'Sunil'
emp.salary = 25000
console.log(emp)

//to access the property of an object
console.log(`------------ Approach - 1 using dot operator -------`)
console.log(`Emp No = ${emp.empNo}\nName = ${emp.empName}\nSalary = ${emp.salary}`)

console.log(`------------ Approach - 2 using [] (brackets) notation -------`)
console.log(`Emp No = ${emp['empNo']}\nName = ${'empName'}\nSalary = ${emp['salary']}`)

console.log(`-------------- Accessing a non-existant property of an object-------`)
console.log(emp['designation']) //undefined
console.log(emp.designation) //undefined
//------------------------------------------------
console.log(`------ Creating an object as a literal -------`)
let emp1 = {empNo: 102, empName:'Rahul', salary:35000}
console.log(emp1)
console.log(`------ object iteration using for .. in loop .......`)
for(let prop in emp1)
{
   console.log(prop+" = "+emp1[prop]+" | "+emp1.prop) 
}

/*
let prop = 'empName'
console.log(`${emp1.prop} - ${emp1[prop]}`)
*/

//---------------------------------
console.log(`----Creating JS Object with Constructor-----`)
function Employee(empNo, name, sal)
{
 console.log(`Inside Constructor---`)
 this.empNo = empNo
 this.empName = name
 this.sal = sal
}

let emp2 = new Employee(102,'Sharth',45000)
console.log(emp2)
let emp3 = new Employee(103,'Sachin',55000)
console.log(emp3)
