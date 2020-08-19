function findOdds()
{
  // get the text field references
  let field_1 = document.getElementById('input_one');
  let field_2 = document.getElementById('input_two'); 
  
  // get the text field values
  let fno = field_1.value;
  let sno = field_2.value;
  
  //convert fno to number type
  //fno = Number(fno);
  fno = parseInt(fno) //converts a string to an integer

  //to find the fno is odd or even
  let rem = fno%2;
  if(rem == 0)
     fno = fno + 1;
  else
     fno = fno + 2;   
  
  let res = '';   
  if(fno < sno)
  {       
    while(fno < sno)
    {        
        if(res.length == 0)
           res= fno;
        else   
           res=`${res}, ${fno}`

        fno=fno+2;
    }
  }//if
  else{
    res='First Number should be less than the second number'
  }//else
  
  //to place the result in the result region
  document.getElementById('output_region').innerHTML = res;
  document.getElementById('output_region').style.display='block';
}//function