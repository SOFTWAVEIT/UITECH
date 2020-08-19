/* ways of creating a JS object*/
//1. create an empty object
let emp = {}
console.log(emp)
console.log(`Type of emp = ${typeof(emp)}`);

//2. create an object as a literal
let account = {acno:1000015478, name:'Sunil Joseph', bal:25000.50};
console.log(account); 
console.log(`A/C No: ${account.acno}`);
for(let property in account){
    console.log(`${property} : ${account[property]}`)
}

//3.create an object using constructor (new operator)
function Product(pid, pname, up)
{
  this.prod_id = pid;
  this.prod_name = pname;
  this.unit_price = up;
}

let prod_1 = new Product('SIT_101','Mobile',25000);
console.log(prod_1);
