let employees = [
    {
        name: 'Sunil',
        age: 40,
        designation: 'Manager',
        active: true
    },
    {
        name: 'Naveen',
        age: 35,
        designation: 'Sr.Manager',
        active: false
    },
    {
        name: 'Rahul',
        age: 25,
        designation: 'Software Engineer',
        active: true
    },
    {
        name: 'Harsha',
        age: 32,
        designation: 'Team Lead',
        active: false
    },
    {
        name: 'Vamsi Krishna',
        age: 33,
        designation: 'Trainer',
        active: true
    }    
];

function allEmployees()
{
 showRecords(employees);
}


let activeEmps = (emp) => {
    return (emp.active)
}

function activeEmployees()
{
 let activeEmployees = employees.filter(activeEmps); 
 showRecords(activeEmployees);
}

function inActiveEmployees()
{
 let inActiveEmployees = employees.filter(function(emp){
     return !emp.active
 })

 showRecords(inActiveEmployees);
}


function seniorStaff()
{
    let seniorEmployees = employees.filter(function(emp){
        return emp.age>=30
    })
   
    showRecords(seniorEmployees);
}

function juniorStaff()
{
    let juniorEmployees = employees.filter(function(emp){
        return emp.age<30
    })
   
    showRecords(juniorEmployees);
}


let showRecords = (emps)=>{
    let result ='';  
    for(let emp of emps)
    {
      result = `${result}<tr><td style=text-align:left>${emp.name}</td><td>${emp.age}</td><td  style=text-align:left>${emp.designation}</td><td>${emp.active}</td></tr>`
    }  
    document.getElementById('table_body').innerHTML = result;    
}