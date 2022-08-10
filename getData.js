function registerData(){
    var mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var mail1,setpass,confpass;
    mail1=document.getElementById("mail1").value;
    setpass=document.getElementById("setpass").value;
    confpass=document.getElementById("confpass").value;
    if(!mail1.match(mailFormat)){
        window.alert("Invalid email address");
        document.getElementById("mail1").focus();
        document.getElementById("mail1").style.backgroundColor = "pink";
        return false;
    }
    else if(setpass!=confpass){
        window.alert("Set password and confirm password must be same");
        document.getElementById("setpass").focus();
        document.getElementById("setpass").style.backgroundColor = "pink";
        document.getElementById("confpass").style.backgroundColor = "pink";
        return false;
        
    }
    else if(setpass.length<6 || confpass.length<6){
        window.alert("Password should contain atleast 6 characters");
        document.getElementById("setpass").style.backgroundColor="pink";
        document.getElementById("confpass").style.backgroundColor="pink";
        return false;

    }
    else if(!setpass.match(passwordFormat)){
        window.alert("Password should match the required format!");
        document.getElementById("setpass").style.backgroundColor="pink";
        document.getElementById("confpass").style.backgroundColor="pink";
        return false;
    }
    else{
        window.alert("ACCOUNT CREATED SUCCESSFULLY");
        localStorage.setItem("Mail",mail1);
        localStorage.setItem("Password",confpass);
    }
    
 }

// function changePlaceholder(){
//     document.getElementById("setpass").placeholder="Should contain alphabets,numbers and special characters";
// }

function checkData(){
    var x=document.getElementById("emails").value;
    var y=document.getElementById("passwords").value;
    if(x == window.localStorage.getItem('Mail') && y == window.localStorage.getItem('Password')){
        window.alert("Login Successful");
    }
    else{
        window.alert("Either email id or password is wrong");
        document.getElementById("emails").focus();
        return false;
    }

}