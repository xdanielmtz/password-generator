// Assignment Code
var generateBtn = document.querySelector("#generate");
var availableChoices = " "


//make each object its own array
var availablelLetters = "qwertyuiopasdfghjklzxcvbnm";
var specialCharacters = "~`!@#$%^&*()-_+={}[]|/,:;'<>,.?";
var availableNumbers = "1234567890";
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";

 //This function will begin the password creation process 
 function generatePassword(){

  //Create a variable - the variable will be the place holder for the clients user type -
  // meaning it will store the choices the user makes while iterating through the prompted questions
  //lookup parsing 
  var passwordType = parseInt(
    prompt("How many characters would you like the password to have?")
  );
  //Begin conditional statement - confirm that the user has typed an actual number and not an integer
  // This statement will determine if the client  typed a number or a interger 
  if (isNaN(passwordType) === true) {
    var length = alert('Password length must be a number')
    return generatePassword();  
  }
  if (passwordType > 128){
    alert("Password should have a max of 128 characters.");
  }
  if (passwordType < 8){
    alert("Password should have a minimum of 8 characters.");
  }
    var askSpecialCharecters = confirm("Do you want to include special characters?");
    var askNumbers = confirm("Do you want to include numbers?");
    var askUpperCase = confirm("Do you want to include uppercase characters?");
    
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

// prompt the user. how many characters do you want the password to contain. 
// add a confirm to include special characters.
// add a confirm to include number characters.
// add a confirm to add lowercase && uppercase
