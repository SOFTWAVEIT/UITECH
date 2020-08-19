let acno = 10012356;
let name = 'Sunil Joseph';
let balance = 25000.00;

//get the reference of the result region
let ac_details = document.getElementById('acc_details_1');

ac_details.innerHTML = `A/C NO: ${acno}<br>NAME: ${name}<br>BALANCE: ${balance}`;
