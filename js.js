var user = document.getElementById("username");
var pass = document.getElementById("pass");
var login = document.getElementById("login");
var tk = "toi";
var mk = "123";
login.onclick = function(){
    if(user.value == tk && pass.value== mk){
        window.open("main.html");
        window.close();
    }
    else{
        alert("tai khoan mat khau sai");
    }
}
