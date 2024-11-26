const Username = document.getElementById("username");
const Password = document.getElementById("password");
const btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click",(e)=>{
    e.preventDefault();
    if (Username.value =="qwerty" && Password.value=="qwerty"){
    window.location="/main/index(2).html";
     alert  ("Login Success Full!!");
    }else{
        alert ("Failed to Login!!");
    }

});
