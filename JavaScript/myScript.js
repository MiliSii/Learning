//1. Get body component and change background-color on it with javascript.
//to change the background color(clicking on h1 title color of bacground change)
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


//2. Get button component in the header, and add a click event listener (google it), and every time you click that button, console.log 'Clicked!'.
  window.onload = () => {
const button = document.getElementById('call-to-action');
  
    button.onclick = () => {
      console.log('Clicked!');
    };
    button.onmouseenter = () => {
      console.log('hover above!');
    };
    button.onmouseleave = () => {
      console.log('out of element!');
    };
  };




  //calculator
function sum(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}
function div(a,b){
  return a/b;
}

function avg(a,b){
  return (a+b)/2;
}
  
function sqrt(a){
  m=0;
  m=Math.sqrt(a);
  return m;
}

function squared(a){
  m=0;
  m=a*a;
  return m;
}

function on_the_third(a){
  m=0;
  m=a*a*a;
  return m;
}


//to change the h2 title color
function TextChange()
{
   document.getElementById("text").style.color="#FF1493";
   
}

//to change color of button
function color()
{
   document.getElementById("bcolor").style.backgroundColor="#00FFFF";
   
}

function reverseString(a) {
  
  var splitString = a.split(""); 
   
  var reverseArray = splitString.reverse();
  
  var joinArray = reverseArray.join(""); 
  
  return joinArray; 
}

