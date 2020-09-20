// Assignment Code
var generateBtn = document.querySelector("#generate");
var availableChoices = " "
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var askUser = prompt("How many characters would you like the password to have?"); 
    i
  
  
  
  
  return "Generated password here.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompt the user. how many characters do you want the password to contain. 
// add a confirm to include special characters.
// add a confirm to include number characters.
// add a confirm to add lowercase && uppercase
