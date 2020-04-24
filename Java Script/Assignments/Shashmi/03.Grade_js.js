let mark=50
let grade

switch(true)
{
    case mark >= 85:
      grade='A';
      break;
    case mark >= 75:
      grade='B';
      break;
    case mark >= 65:
       grade='C';
       break;
    case mark >= 55:
        grade='D';
        break;
    default:
        grade='Failed'
}
console.log('Shashmini Got Grade of:'+grade);
document.getElementById('Grade').innerHTML =`Shashmini Got Grade of :${grade}`