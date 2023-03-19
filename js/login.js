let numAttempts = 0;
let lastAttemptTime = 0;
let isLockedOut = false;

function login()
{
    let mail = document.getElementById('email');
    let pass = document.getElementById('password');
    let error = document.getElementById('h3');
    const currentTime = new Date().getTime();
    if (mail.value=="mandakh@gmail.edu.mn" && pass.value=="12345678" && numAttempts >= 3 && (currentTime - lastAttemptTime) < 15000) {
      alert("You have been locked out. Please try again later.");
      location.href="#"
      return;
    }
    if(mail.value=="mandakh@gmail.edu.mn" && pass.value=="12345678")
    {    numAttempts = 0;
        lastAttemptTime = 0;
        location.href="main.html"
       
       
    }else if(mail.value=="" && pass.value=="")
    {  
        error.style.display="block"
        error.innerHTML='Please! Enter e-mail and password'
        mail.value=" "
        pass.value=" "
    }else{
        numAttempts++;
        lastAttemptTime = currentTime;
        mail.value=""
        pass.value=""
        error.style.display="block"
        error.innerHTML='invalid e-mail or password'
    }
}