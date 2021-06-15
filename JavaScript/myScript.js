function AliceBlue() {
    document.body.style.backgroundColor = "#F0F8FF";
  }

function Bisque() {
    document.body.style.backgroundColor = "#FFE4C4";
  }

  function LavenderBlush() {
    document.body.style.backgroundColor = "#FFF0F5"; 
  }

  function WhiteSmoke() { 
    document.body.style.backgroundColor = "#F5F5F5";  
  }
  function DeepPink(){
    document.textContent.style.color="#FF1493"; 
  }

 var count = 0;
  function myClickHandler() {
    
    switch(count) {
      case 0:
        AliceBlue();
        break;
      case 1:
        Bisque();
        break;
      case 2:
          LavenderBlush();
          break;
      case 3:
         WhiteSmoke(); 
         break;
    }
    count++;
    return  1;
  }

  function m(){
    var name = window.prompt("Enter your name: ");
    var surname= window.prompt("Enter your surname: ");
    alert("Your nickname is " + name+surname);
    
  }




