function registerCode(){
    event.preventDefault();
  var username=  document.getElementById('username').value;
  var password= document.getElementById('password').value;
  var mobileNumber= document.getElementById('mobileNumber').value;
  var emailid= document.getElementById('emailid').value;  
  var registerData={
      username:username,
      password:password,
      mobileNumber:mobileNumber,
      emailid:emailid
  }
  //console.log(RegisterData);
 if(localStorage.getItem('registrations')==null){
 localStorage.setItem('registrations',JSON.stringify([]));
 var allRegister=JSON.parse(localStorage.getItem("registrations"));
 allRegister.push(registerData);
 localStorage.setItem("registrations",JSON.stringify(allRegister));
 clearFields();
}
 else{
    var comments=JSON.parse(localStorage.getItem('registrations'));
    comments.push(registerData);
    localStorage.setItem('registrations',JSON.stringify(comments));
    clearFields();    
}
    function clearFields(){
        document.getElementById('username').value="";
        document.getElementById('password').value="";
        document.getElementById('mobileNumber').value="";
        document.getElementById('emailid').value="";
   }
}



