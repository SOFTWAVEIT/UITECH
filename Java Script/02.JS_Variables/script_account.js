let acno = 100012391
let name = 'Sunil Joseph'
let bal = 85451.5

//get the reference of the region where the details to be set
let acc_details = document.getElementById('acc_details')

acc_details.innerHTML = `A/C NO: ${acno}<br>NAME: ${name}<br>BALANCE: ${bal}`

//alert(acc_details.innerHTML)