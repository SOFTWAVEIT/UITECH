let result = ''
let n = 2
while(n<=20)
{
  if(n==2)
   result = result + n
  else
   result = result + ', '+n   

  n = n+2 
}//while
document.getElementById('even_nums').innerHTML = result