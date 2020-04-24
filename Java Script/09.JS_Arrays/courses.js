let courses = new Array()
//let courses = []

//get field references
let txtCourseName = document.getElementById('txtCourseName')
let courses_region = document.querySelector('#courses_region')

/*arrow function for adding course to array */
let addCourse = ()=>{
  //get course name from text field
  let course = txtCourseName.value

  //to remove the leading an ending spaces of a String
  course = course.trim()
  
  //to check whether the course name is entered in the text field or not
  if(course.length>0){
   //add the course name to the array , if not present in array
   let index = courses.indexOf(course)
   if(index < 0){
       courses.push(course)
       //courses.unshift(course)
       console.log(courses)
       //clear the text field value
       txtCourseName.value = ''
       
       /*to get array contents if any*/
       if(courses.length>0){
        let resultDisplay = '<h2>Course @ SIT</h2><ol type=1>'
        for(course of courses){
           resultDisplay=`${resultDisplay}<li>${course}</li>`
        }
        resultDisplay=`${resultDisplay}</ol>`

        //to places the courses in the web page (DOM)
        courses_region.innerHTML = resultDisplay
      }//if
   }
   else{
       alert('Course Name is already in List!')
   }
  }
  else{
      alert('Please enter a course name!!')
  }
}