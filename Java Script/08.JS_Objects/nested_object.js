//create a nested object for student
let student = {
    name:'Sunil Joseph',
    age: 40,
    course: 'UI Technologies',
    address: {
        street: 'Mothinagar',
        city: 'Hyderabad',
        state:'Telangana'
    }
}

console.log(student);
console.log(`Name = ${student.name}`)
console.log(`Address = ${student.address}`) //[object Object]
console.log('City = '+ student['address']['city']);
console.log('City = '+ student.address.city);

//to add a new property to address dynamically
student.address.country = 'India';

console.log(student.address)
console.log(student['address'])

/*
for(let p in student['address'])
{
 console.log(p+" - "+ student.address[p]);   
}
*/
/*--- object iteration using for ... in loop */
console.log('STUDENT DETAILS:')
for(let prop in student)
{
  if(typeof(student[prop]) != 'object') 
  { 
    console.log(`${prop.toUpperCase()} : ${student[prop]}`)  
  }
  else
  {
      console.log(prop.toUpperCase()+ ' DETAILS:')
      for(let p in student[prop])
      {
          console.log("    "+p.toUpperCase()+" : "+ student[prop][p]);
      }
  }  
}

//to remove the property of an object - use delete operator
delete student.address.country
console.log(student.address);