// Assignment Code
var generateBtn = document.querySelector("#generate");
var availableChoices = " "




//make each object its own variable.
var availableLetters = "qwertyuiopasdfghjklzxcvbnm";
var specialCharacters = "~`!@#$%^&*()-_+={}[]|/,:;'<>,.?";
var availableNumbers = "1234567890";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var thePassword = ""
 //Create a variable - the variable will be the place holder for the clients user type -
  // meaning it will store the choices the user makes while iterating through the prompted questions
var passChoices = ""



 //This function will begin the password creation process 
 function generatePassword(){
  var passwordType = parseInt(
    prompt("How many characters would you like the password to have?")
  );
  //Begin conditional statement - confirm that the user has typed an actual number and not an integer
  // This statement will determine if the client  typed a number or a interger 
  if (isNaN(passwordType) === true) {
    var length = alert("Password length must be a number");
    return generatePassword();  
  }
  if (passwordType > 128){
    alert("Password should have a max of 128 characters.");
    return generatePassword();
  }
  if (passwordType < 8){
    alert("Password should have a minimum of 8 characters.");
    return generatePassword();
  }
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
  //Create a conditional statement to assure that the user has - the proper min and max length 
  //this conditional statement will check to assure there are a in on 18 chars
  // if (apple < 18){
   // alert "You need a min of 18 chars"
  //}

 

//Begin confirming the clients desired password format - with confirm statements (variables)
  
  

  //store the users information 

  // var opt = {
  //   lent : lent,
  //   apple: apple,
  //   askSpecialCharecters: askSpecialCharecters
  // };

  return "Generated password here.";
}

//Create a randomizer function 
//math.floor(math.random() * arr.length)
//Grab random element from an array 


//the formation of the password - thi is where you put all previous methods into action 
function thisFunction () {
  //grab users options by placing your generatePassword() in a var 
  var yourVar = passwordFunction();

  //store results 
  var myVar = []

  //possible choices and definite choices 
}













// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
