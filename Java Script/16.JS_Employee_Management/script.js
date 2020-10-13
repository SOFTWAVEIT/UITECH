function showAllEmployees()
{
 displayEmployees(employees);
}

/*--- function to get male employees ---*/
function showMaleEmployees(){
 let males = employees.filter(function(emp){
    return emp.gender.toUpperCase()=='MALE' 
 })
 displayEmployees(males);
}

/*--- function to get male employees ---*/
let showFemaleEmployees = () => {
    let females = employees.filter(function(emp){
       return emp.gender.toUpperCase()=='FEMALE' 
    })
    displayEmployees(females);
}

/*-- function to get employees with a particular text */
function getEmployees(name_part){
 let emps = employees.filter(function(emp){
    return emp.first_name.toLowerCase().startsWith(name_part.toLowerCase()); 
 })
 displayEmployees(emps);
}

/*--- function to display employee details in the table body ----*/
let displayEmployees = (emps)=>{
  let empData = ''
  let slno=1

  for(let emp of emps){
    empData = `${empData}<tr>
                <td>${slno++}</td>
                <td>SIT_${emp.id}</td>
                <td>${emp.first_name}</td>
                <td>${emp.last_name}</td>
                <td>${emp.gender}</td>
                <td>${emp.age}</td>
                <td>${emp.country}</td>
                </tr>
    `
  }//for
  document.querySelector('#table_body').innerHTML = empData;
  document.querySelector('#no_of_records').innerText = emps.length;
}