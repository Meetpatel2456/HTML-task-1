function validation(){
    var email = document.getElementById("email").value;
    var pword = document.getElementById("password").value;
    

    var rgex = /^([a-z 0-9 \. _]+)@([a-z]+).([a-z]{2,6}).([a-z]{2,6})?$/;
    if(email == "" && pword == ""){
        alert("Please Enter Password and Email Address.")
    }
    else if (pword == "" ) {
        alert("Please Enter a password");
    }
    else if(email == ""){
        alert("Please Enter an Email Address");
    }
    
    else if (email == "meet@gmail.com" && password == "24567965") {
        alert("Signin Successfully")
    }
    else{
        alert("Wrong Email and Password")
    }
}