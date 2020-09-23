// Assignment Code
var generateBtn = document.querySelector("#generate");

//make each object its own variable.
var availableLetters = "qwertyuiopasdfghjklzxcvbnm";
var specialCharacters = "~`!@#$%^&*()-_+={}[]|/,:;'<>,.?";
var availableNumbers = "1234567890";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var thePassword = ""
 //Create a variable - the variable will be the place holder for the clients user type -
// meaning it will store the choices the user makes while iterating through the prompted questions
var passChoices = ""
var passText = document.getElementById("password");

 //This function will begin the password creation process 
 function generatePassword(){
  var passwordType = parseInt(
    prompt("How many characters would you like the password to have?")
  );
  //Begin conditional statement - confirm that the user has typed an actual number and not an integer
  // This statement will determine if the client typed a number or a integer.
  if (isNaN(passwordType) === true) {
    var length = alert("Password length must be a number");
    return generatePassword();  
  }
  //conditionals if user inputs a number greater than 128 or less than 8.
  if (passwordType > 128){
    alert("Password should have a max of 128 characters.");
    return generatePassword();
  }
  if (passwordType < 8){
    alert("Password should have a minimum of 8 characters.");
    return generatePassword();
  }
    //if user accepts the following prompts then the selection will be saved to the placeholder variable above.
    var askSpecialCharacters = confirm("Do you want to include special characters?");
    if (askSpecialCharacters){
      passChoices += specialCharacters;
    }
    var askNumbers = confirm("Do you want to include numbers?");
    if (askNumbers){
      passChoices += availableNumbers;
    }
    var askUpperCase = confirm("Do you want to include uppercase characters?");
    if (askUpperCase){
      passChoices += upperCase;
    }
    var askLowerCase = confirm("Do you want to include lowercase characters?");
    if (askLowerCase){
      passChoices += availableLetters;
    }
  // for loop
  for (var i = 0; i < passwordType; i++) {
  thePassword += passChoices[Math.floor(Math.random() * passChoices.length)]; 
 }
  passText.value = thePassword;
 

  return thePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
