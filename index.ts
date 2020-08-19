// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

 console.log(ConvertSeconds(1,3),"seconds"); 
 
let total=0;
function ConvertSeconds(H,M)  
{  
let  hours, minutes;
  
  hours = H * 3600;  
  minutes = M * 60;
total=hours+minutes;
return total;
}
    
    



  