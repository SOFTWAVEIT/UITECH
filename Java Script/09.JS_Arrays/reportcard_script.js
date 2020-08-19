let stud_name='', noOfSubs=0;
let marks = new Array();

/* arrow function for getting the student name, no of subjects and marks*/
let marksEntry = () => {
    stud_name = prompt('enter student name');

    noOfSubs = prompt('enter number of subjects');   

    //marks entry
    for(let i=0;i<noOfSubs;i++)
    {
      marks[i] = prompt('enter mark for Subject-'+(i+1),'0')   
    }
    console.log(marks)
}

//function for generating report card
function generateReportCard()
{
 if(stud_name.length >0 && noOfSubs>0)
 {
    //show the student name in page 
    document.getElementById('student_name').innerText = stud_name;

    let total = 0;
    let tbody_content = '<tr><th>SUBJECT</th><th>MARK</th></tr>';
    for(let i=0;i<noOfSubs;i++)
    {
       tbody_content = tbody_content+'<tr><td>Subject-'+(i+1)+'</td><td align=center>'+marks[i]+'</td></tr>' 

       total = total + Number(marks[i]); //parseInt(marks[i])
    }
    //show subject names with marks in page
    document.getElementById('student_marks').innerHTML = tbody_content;

    //show total marks and aggregate in the footer region
    let avg = total/noOfSubs
    document.getElementById('student_aggregate').innerHTML = '<tr><td>TOTAL: '+total+"</td><td>AVERAGE: "+avg.toFixed(2)+"</td></tr>"
 }
 else
 {
  alert('Please do the data entry!')
 }//else
}//generateReportCard