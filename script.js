// Assignment Code
var generateBtn = document.querySelector("#generate");
var availableChoices = " "
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var availableChoices = {
   "letters":[
     "q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"
   ],
   "specialCharacters":[
    "~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","/",":",";","'","<",">",",",".","?"
   ],
   "numbers":[
     "1","2","3","4","5","6","7","8","9","0"
   ],
   "upperCase":[
    "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"
   ],
  }

var randomIndex = math.floor(math.random()*27);
console.log("Random Index:" randomIndex);

  passwordText.value = password;
}

function generatePassword(){
  var askUser = prompt("How many characters would you like the password to have?"); 
  var askSpecialCharecters = confirm("Do you want to include special characters?");
  var askNumbers = confirm("Do you want to include numbers?");
  var askUpperCase = confirm("Do you want to include uppercase characters?");
  
  
  return "Generated password here.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompt the user. how many characters do you want the password to contain. 
// add a confirm to include special characters.
// add a confirm to include number characters.
// add a confirm to add lowercase && uppercase
