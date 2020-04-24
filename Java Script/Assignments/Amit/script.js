let inputFunction = function(){
   let s_101 = document.getElementById("s101").value;
   let s_102 = document.getElementById("s102").value;
   let s_103 = document.getElementById("s103").value;
   let s_104 = document.getElementById("s104").value;
   let s_105 = document.getElementById("s105").value;

   s_101 = parseInt(s_101,10);
   s_102 = parseInt(s_102,10);
   s_103 = parseInt(s_103,10);
   s_104 = parseInt(s_104,10);
   s_105 = parseInt(s_105,10);
   if(s_101 <= 100 && s_102 <= 100 && s_103 <= 100 && s_104 <= 100 && s_105 <=100){

        let sum = calculateFunction(s_101, s_102, s_103, s_104, s_105);
        let avg = sum / 5;
        if (avg >= 90 && avg <= 100) {
            document.getElementById("result").innerHTML = `Result: ${sum} `;
            document.getElementById("status").innerHTML = `Status: PASS - Esceptional (A+)`;
        } else if (avg >= 80 && avg <= 89) {
            document.getElementById("result").innerHTML = `Result: ${sum} `;
            document.getElementById("status").innerHTML = `Status: PASS - Excellent (A)`;
        } else if (avg >= 70 && avg <= 79) {
            document.getElementById("result").innerHTML = `Result: ${sum} `;
            document.getElementById("status").innerHTML = `Status: PASS - Good (B)`;
        } else if (avg >= 60 && avg <= 69) {
            document.getElementById("result").innerHTML = `Result: ${sum} `;
            document.getElementById("status").innerHTML = `Status: PASS - Satisfactory (C)`;
        } else if (avg >= 50 && avg <= 59) {
            document.getElementById("result").innerHTML = `Result: ${sum} `;
            document.getElementById("status").innerHTML = `Status: PASS - Barely acceptable (D)`;
        } else if (avg >= 0 && avg <= 49) {
            document.getElementById("result").innerHTML = `Result: ${sum} `;
            document.getElementById("status").innerHTML = `Status: FAIL - Unacceptable (F)`;
        }
    }else{
        alert("You Have Cheated!!! Please Type a Valid Input Between 0 to 100");
    }
    if(s_101 >= 90){
        document.getElementById("s11").innerHTML = `Good`
    }else{
        document.getElementById("s11").innerHTML = `Try Hard`
    }
    if(s_102 >= 90){
        document.getElementById("s12").innerHTML = `Good`
    }else{
        document.getElementById("s12").innerHTML = `Try Hard`
    }
    if(s_103 >= 90){
        document.getElementById("s13").innerHTML = `Good`
    }else{
        document.getElementById("s13").innerHTML = `Try Hard`
    }
    if(s_104 >= 90){
        document.getElementById("s14").innerHTML = `Good`
    }else{
        document.getElementById("s14").innerHTML = `Try Hard`
    }
    if(s_105 >= 90){
        document.getElementById("s15").innerHTML = `Good`
    }else{
        document.getElementById("s15").innerHTML = `Try Hard`
    }

}
    let calculateFunction = function (s_101, s_102, s_103, s_104, s_105){
        let sum = (s_101 + s_102 + s_103 + s_104 + s_105);

        return sum;

    }
    let evfun = function(){

    }
