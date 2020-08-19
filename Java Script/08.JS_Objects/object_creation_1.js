/*create an empty object*/
let emp = {};
console.log(emp)
console.log(`Data Type of emp = ${typeof(emp)}`) //object

/*to assign properties to an object*/
emp.empNo = 101;
emp.empName = 'Sunil';
emp.empSal = 25000;
emp['empDesig'] = 'Manager';
console.log(emp)

/*to access the properties of an object*/
console.log(`Approach-1 | using dot operator`)
console.log(`Emp No = ${emp.empNo}`)
console.log(`Emp Name = ${emp.empName}`)
console.log(`Emp Salary = ${emp.empSal}`)
console.log('Emp Designation = '+ emp.empDesig)

console.log(`Approach-2 | using brackets []`)
console.log(`Emp No = ${emp['empNo']}`)
console.log(`Emp Name = ${emp['empName']}`)
console.log(`Emp Salary = ${emp['empSal']}`)
console.log('Emp Designation = '+ emp['empDesig'])

/* accessing the non-existing property of an object */
console.log(emp.location)
console.log(emp['location'])
console.log(`----------------------------------`)

/*difference between accessing a property of an object using . and [] */
let prop = 'empName';
console.log('Emp Name = '+ emp.prop); //undefined
console.log('Emp Name = '+ emp[prop]); //Sunil
console.log(`----------------------------------`);

/*to get the property names of an object  - or for object iteration*/
console.log(`Property Names of a emp Object`)
for(let prop in emp)
{
  console.log(prop);
}

console.log(`----------------------------------`);
/*to get the property names with values of an object*/
console.log(`Property Names with Values of emp Object`)
for(let x in emp)
{
  console.log(x+" : "+emp[x] + ` || ${x} : ${emp[x]}`);
}