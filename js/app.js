
function reveal() {
    var reveals = document.querySelectorAll(".para");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function rev() {
    var reveal = document.querySelectorAll(".long");
  
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", rev);
function reve() {
    var revealss = document.querySelectorAll("h1 ,a");
  
    for (var i = 0; i < revealss.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = revealss[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        revealss[i].classList.add("active");
      } else {
        revealss[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reve);
  

