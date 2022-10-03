// console.log('Hello World');

let submit = document.getElementById('submit');
submit.addEventListener('click', function(){
 let email = document.getElementById("email").value;
 let username = document.querySelector('#username').value;
 let password = document.querySelector('#password').value;
 let confirm =document.querySelector('#conPass').value;
 let male = document.querySelector('#male').checked;
 let female = document.querySelector('#female').checked;
 let agree = document.querySelector('#agree').checked;
  console.log(agree);
; 
let err = ''; 

  if(!emailValidation(email)){
     err = 'Invalid email format';
  }else if(username.length <3 || username.length >8){
     err = 'Username must be 3-8 character !';
  }else if(!passwordValidation(password)){
     err = 'Password at least has 1 number !';
  }else if(password!=confirm){
     err = "Password didn't match !";
  }else if (male === false && female === false ){
     err = 'Gender must be checked !';
  }else if(agree === false){
    err = 'You must agree to the terms first !';
  }

 
 if(err === ''){
     //succes
     alert(' Input Success');
 }
 else{
     //error
     alert(err);
     return false;
 }
});

function emailValidation(email) {
  let prefer= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return prefer.test(email);
}

function passwordValidation(password){
  let prefer=/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{5,12}$/;
  return prefer.test(password);

}