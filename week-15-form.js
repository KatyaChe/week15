
    function check() 
    {
        let name = document.getElementById("name1");
        let surname = document.getElementById("surname1");
        let phone = document.getElementById("phone1");
        let login = document.getElementById("login1");
        let password = document.getElementById("password1");
        document.getElementById("name1").innerHTML="";
        document.getElementById("errorMessage").innerHTML="";
        if (name.value=="") {
            document.getElementById("errorMessage").innerHTML+="Ваше имя не указано<br>";
        }
        else if (surname.value=="") {
            document.getElementById("errorMessage").innerHTML+="Ваша фамилия не указана<br>";
        }
        else if (phone.value=="") {
            document.getElementById("errorMessage").innerHTML+="Ваш телефон не указан<br>";
        }
        else if (login.value=="") {
            document.getElementById("errorMessage").innerHTML+="Ваш login не указан<br>";
        }
        else if (password.value=="") {
            document.getElementById("errorMessage").innerHTML+="Ваш password не указан<br>";
        }
else {
document.getElementById("sayhello").innerHTML="Добро пожаловать,"+name.value;
}
    }
