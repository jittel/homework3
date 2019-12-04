
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword(length) {
    //YOUR CODE HERE

    var result = '';
    var possibleChar = '';
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var special = "0123456789!#$%&()*+,-./:;<=>?@[\]^_`{|}~';"
    var yesCaps = confirm("Do you want to include capital letters?");
    var yesSpec = confirm("Do you want to include special characters?");

    if (yesCaps === true) {
        possibleChar += lowercase.concat(uppercase);
    }
    if (yesSpec == true) {
        possibleChar += lowercase.concat(special);
    }

    for (var i = 0; i < length; i++) {
        
        result += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
    }

    // alert("ive been clicked");
    return result;
}

// Write password to the #password input
function writePassword() {

    var passwordLength = parseInt(prompt("how long would you like your password to be? (please enter a number between 8 and 128)"));
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // document.body.children[2].execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
// generateBtn.addEventListener("click", copyToClipboard);