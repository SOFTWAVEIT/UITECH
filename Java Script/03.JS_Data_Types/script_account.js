let acno = 10012356;
let name = 'Sunil Joseph';
let balance = 25000.50;

function ac_details() 
{
    //get the reference of the result region
    let ac_details = document.getElementById('acc_details_1');

    let details = `A/C NO: ${acno} - <span style=color:yellow>(${typeof (acno)})</span><br>
               NAME: ${name} - <span style=color:yellow>(${typeof name})</span><br>
               BALANCE: ${balance} - <span style=color:yellow>(${typeof balance})</span>`

    ac_details.innerHTML = details;
}
