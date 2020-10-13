//to get span references
let errorUserName = document.querySelector("#spanUsername")
let errorPassword = document.querySelector("#spanPassword")
let errorConfirmPassword = document.getElementById("spanConfirmPassword")
let errorAmount = document.getElementById("spanAmount")
let errorPayment = document.getElementById("spanPaymentMode")
let errorEmail = document.getElementById("spanEmail")

//to get input and select references
let txtUserName = document.querySelector("#txtUsername")
let txtPassword = document.getElementById("txtPassword")
let txtConfirmPassword = document.getElementById("txtConfirmPassword")
let txtAmount = document.getElementById("txtAmount")
let txtPaymentMode = document.getElementById("txtPaymentMode")
let txtEmail = document.getElementById("txtEmail")


let validateData = () => {
    clearFields();
    let errors = new Array();

    //get values from text boxes
    let userName = txtUserName.value.trim();
    let password = txtPassword.value.trim();
    let confirmPassword = txtConfirmPassword.value.trim();
    let amount = txtAmount.value.trim();
    let paymentMode = txtPaymentMode.value
    let email = txtEmail.value.trim();
    let errorList = document.querySelector('#errorList');

    //validation for User Name
    if (userName.length <= 0) {
        errorUserName.innerText = 'Username cannot be Blank'
        errors.push('Username cannot be Blank');
    }

    //validation for Password
    if (password.length <= 0) {
        errorPassword.innerText = 'Password cannot be Blank'
        errors.push('Password cannot be Blank')
    }

    //validation for Confirm Password
    if (confirmPassword.length <= 0) {
        errorConfirmPassword.innerText = 'Confirm Password cannot be blank';
        errors.push('Confirm Password cannot be blank')
    }

    //password and conformPassword should be same
    if (!(password == confirmPassword)) {
        errorConfirmPassword.innerText = 'Password and conform password should be same'
        errors.push('Confirm Password cannot be blank')
    }
    //validation 5: Amount should be between 1000 to 100000
    if (isNaN(amount) || amount < 1000 || amount > 100000) {
        let errorMsg = "Amount should be in between 1000 and 100000.";
        errors.push(errorMsg);
        errorAmount.innerHTML = errorMsg;
    }

    //validation 6: Payment mode should be specified
    if (paymentMode == "") {
        let errorMsg = "Select any Payment Mode.";
        errors.push(errorMsg);
        errorPayment.innerHTML = errorMsg;
    }

    //validation 7: Email should be in proper format
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
    if (pattern.test(email) == false) {
        let errorMsg = "Email should be in proper format";
        errors.push(errorMsg);
        errorEmail.innerHTML += errorMsg;
    }

    if (errors.length > 0) {
        let er=''
        for(err of errors){
            er=`${er}<li>${err}</li>`
        }
        
        errorList.innerHTML = er;
        errorList.style.width='60%'
        errorList.style.margin='20px auto'
        errorList.style.boxShadow='0 0 10px black'
        errorList.style.padding='10px 40px'
        errorList.style.fontSize='16px'
        return false;
    }
}

function clearFields() {
    errorUserName.innerText = '';
    errorPassword.innerText = '';
    errorConfirmPassword.innerText = '';
    errorAmount.innerText = '';
    errorEmail.innerText = '';
    errorPayment.innerText = '';
    document.querySelector('#errorList').innerText =''
    errorList.style.boxShadow='none'
}