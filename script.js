confirm("I hope you like this aud")
   
   let char = [ "I"," ", "m", "i", "s", "s", " ", "y", "o", "u", " ", "k", "a", " ", "c", "h", "a", "t"]
       
       let counter = 0;
       
       
       setInterval( () => {
         counter++
         if(counter == 1) {
           document.querySelector(".text").innerHTML += char[0]
         } else if(counter == 2) {
           document.querySelector(".text").innerHTML += char[1]
         } else if(counter == 3) {
           document.querySelector(".text").innerHTML += char[2]
         } else if(counter == 4) {
           document.querySelector(".text").innerHTML += char[3]
         }  else  if(counter == 5) {
           document.querySelector(".text").innerHTML+= char[4]
         }  else  if(counter == 6) {
           document.querySelector(".text").innerHTML += char[5]
         }  else  if(counter == 7) {
           document.querySelector(".text").innerHTML += char[6]
         }    else if(counter == 8) {
           document.querySelector(".text").innerHTML += char[7]
         }   else if(counter == 9) {
           document.querySelector(".text").innerHTML += char[8]
         }  else if(counter == 10) {
           document.querySelector(".text").innerHTML += char[9]
         } else if(counter == 11) {
            document.querySelector(".text").innerHTML += char[10]
         } else if(counter == 12) {
            document.querySelector(".text").innerHTML += char[11]
         } else if(counter == 13) {
            document.querySelector(".text").innerHTML += char[12]
         } else if(counter == 14) {    
            document.querySelector(".text").innerHTML += char[13]
         } else if(counter == 15) {  
            document.querySelector(".text").innerHTML += char[14]
         } else if(counter == 16) {      
            document.querySelector(".text").innerHTML += char[15]
         } else if(counter == 17) {   
            document.querySelector(".text").innerHTML += char[16]
         } else if(counter == 18) {   
            document.querySelector(".text").innerHTML += char[17]
         } else if(counter == 19) {       
        
            document.querySelector(".text").innerHTML = ""
           counter = 0 
         }
       }, 250)