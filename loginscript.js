function confirm(){
    
    /*sir, we have two login forms: one for the home page, one is modal.
    sorry we don't know how to reuse html forms just yet ;-;
    we had to use different codes for different id's in each login form
    that's why the code became complicated ;-;*/

    //this is for the home login
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;

    //this is for the modal login
    var uname2 = document.getElementById("uname-2").value;
    var pass2 = document.getElementById("pass-2").value;

    var text = "It works";

    if(uname != ""){

        if(uname == "user" && pass == "user"){
            document.getElementById("adminsuccess").innerHTML = ""; 
            document.getElementById("usersuccess").innerHTML = text;
        }

        else if(uname == "admin" && pass == "admin"){
            document.getElementById("usersuccess").innerHTML = ""; 
            document.getElementById("adminsuccess").innerHTML = text;
        }

        else{
            document.getElementById("adminsuccess").innerHTML = ""; 
            document.getElementById("usersuccess").innerHTML = ""; 
            alert ("Credentials are incorrect");
        }

    }

    else{
        if(uname2 == "user" && pass2 == "user"){
            document.getElementById("adminsuccess-2").innerHTML = ""; 
            document.getElementById("usersuccess-2").innerHTML = text;
        }

        else if(uname2 == "admin" && pass2 == "admin"){
            document.getElementById("usersuccess-2").innerHTML = ""; 
            document.getElementById("adminsuccess-2").innerHTML = text;
        }

        else{
            document.getElementById("adminsuccess").innerHTML = ""; 
            document.getElementById("usersuccess").innerHTML = "";
            document.getElementById("adminsuccess-2").innerHTML = ""; 
            document.getElementById("usersuccess-2").innerHTML = ""; 
            alert ("Credentials are incorrect");
        }
    }

    document.getElementById("uname").value = "";
    document.getElementById("pass").value = "";

    document.getElementById("uname-2").value = "";
    document.getElementById("pass-2").value = "";

}