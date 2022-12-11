function login()
{
    let mail = document.getElementById('email');
    let pass = document.getElementById('password');
    let error = document.getElementById('h3');
    if(mail.value=="mandakh@gmail.edu.mn" && pass.value=="12345678")
    {     location.href="main.html"
       
       
    }else if(mail.value=="" && pass.value=="")
    {  
        error.style.display="block"
        error.innerHTML='Please! Enter e-mail and password'
        mail.value=" "
        pass.value=" "
    }else{
        mail.value=""
        pass.value=""
        error.style.display="block"
        error.innerHTML='invalid e-mail or password'
    }
}