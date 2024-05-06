function validationForm(){


    let name =document.getElementById("Choosecurrency").value;
    let email = document.getElementById("naira").value;
    let password = document.getElementById("dollar").value;
    let phone = document.getElementById("pound").value;
    let address = document.getElementById("number").value;
    

    let nameError=document.getElementById("choosecurrencyError").value;
    let emailError = document.getElementById("nairaError").value;
    let passwordError = document.getElementById("dollarError").value;
    let phoneError = document.getElementById("poundError").value;
    let addressError = document.getElementById("numberError").value;
    


nameError.innerHTML ="";
    emailError.innerHTML = "";
    passwordError.innerHTML ="";
    phoneError.innerHTML ="";
    addressError.innerHTML ="";
    genderError.innerHTML ="";

    let isvalid =true;
    //name validation
    if (Choosecurrency ===""){
        ChoosecurrencyError.textcontent = "Name is required"
        isvalid = false;

     //email validation
     if(naira ===""){
        nairaError.textcontent ="Email is required";
        isvalid =false;   
     }else if (!/\S+@\S+\.\S+/.test(email)){
      nairaError.textcontent="Ivalid Email Address";
     }

     //passwordvalidation
     if(dollar === ""){
      dollarError.textcontent = "password is reguired"
      isvalid = false;

     } else if(dollar.length < 6) { 
      dollarError.textcontent = "password must be 6 character long"
      isvalid = false;
     }

     //phone validation
     if (pound ==="") {
      poundError.textcontext = "Enter your phone number";
      isvalid = false;
     } else if (!/^\d{11}$/.test(phone)){
      poundError.textcontent="Invalid phone format";
      isvalid =false;
     }

     //address validation
     if (number === "") {
      numberError.textcontent= "Enter your address";
     }

     return isvalid



}
}

