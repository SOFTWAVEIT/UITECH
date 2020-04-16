let stud_name='', noOfSubs
let marks = new Array()

/* arrow function for data entry - student name, no of subjects, marks of each subject*/
let fun_data_entry = ()=>{
 stud_name = prompt('Enter Student Name:')

 noOfSubs = prompt('Enter the Number of Subjects: ')

 for(let i=0;i<noOfSubs;i++){
   marks[i] = parseInt(prompt('Enter Subject-'+(i+1)+' Mark'))
 }
 //console.log(marks)
 document.getElementById('rc_button').disabled='' 
}

/*arrow function to generate Report Card*/
let generate_rc = ()=>{    
 let rc_body = ''
 let total = 0

 //to display student name
 document.getElementById('rc_name').innerHTML = stud_name

 rc_body = '<tr><th>SUBJECT</th><th>MARKS</th></tr>'

 for(let i=0;i<marks.length;i++){
     rc_body = rc_body+'<tr><td>Subject-'+(i+1)+"</td><td align=center>"+marks[i]+'</td></tr>'
     total = total + marks[i];
 }
 document.querySelector('#rc_body').innerHTML = rc_body

 /*generating footer section content*/
 let avg = total/noOfSubs
 avg = avg.toFixed(2) //to define the number of precisions
 
 let rc_foot = '<tr><th>TOTAL: '+total+'</th><th>AVERAGE: '+avg+'</th></tr>'
 document.querySelector('#rc_foot').innerHTML = rc_foot
}
