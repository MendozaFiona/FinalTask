function confirm(){

    var uname = document.getElementById("uname").value; //remember to put id=uname in html
    var pass = document.getElementById("pass").value; //remember to put id=pass in html
    var text = "It works";

    if(uname == "user" && pass == "user"){ //reminder this is below login form
        document.getElementById("adminsuccess").innerHTML = ""; 
        document.getElementById("usersuccess").innerHTML = text; //reminder to put id=usersuccess in html label loginform
    }

    else if(uname == "admin" && pass == "admin"){ //reminder this is above login form
        document.getElementById("usersuccess").innerHTML = ""; 
        document.getElementById("adminsuccess").innerHTML = text;
    }

    else{
        alert ("Credentials are incorrect");
    }

}