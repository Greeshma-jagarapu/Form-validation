let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');

function ValidateForm(){
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    let fname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    //Validating name
    if(fname.length == 0){
        nameError.innerHTML = "*Name required";
        return false;
    }

    if(!fname.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameError.innerHTML = "*Invalid Name";
        return false;
    }

    //Validating Email
    if(email.length == 0){
        emailError.innerText = "*Email Required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/)){
        emailError.innerText = "*Invalid Email";
        return false;
    }

    //Validating Message
    if(message.length == 0){
        messageError.innerText = "*Please write message";
        return false;
    }
    
    let required = 20;
    let left = required - message.length;
    if(left > 0){
        messageError.innerText = left + " more characters required";
        return false;
    }

    return true;
}