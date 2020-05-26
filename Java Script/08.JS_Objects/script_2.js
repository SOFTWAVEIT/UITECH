let student = {
    name:'Sunil Joseph',
    age: 40,
    course: 'UI Technologies',
    address:{
        street:'Ameerpet',
        city:'Hyderabad',
        state:'Telangana'
    }
}

console.log(student)
console.log(`Name: ${student.name}`)
console.log(`Street: ${student.address.street}`)

//to add a new property to address dynamically
student.address.country='India'

console.log(student)

/*object iteration*/
console.log(`----- Student Details --------`)
for(let property in student)
{
  //alert(typeof student[property])  
  if(typeof(student[property]) == 'object'){
    console.log(`-- ${property.toUpperCase()} Details-----`)
    for(let prop in student[property]){
        console.log(`${prop} - ${student[property][prop]}`)
    }
  }
  else{
    console.log(`${property} = ${student[property]}`)  
  }
}