// Assignment code here
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var cap_alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\\"]
var selected = []

function merge(x) {
  for (var i = 0; i < x.length; i++) {
    selected.push(x[i])
  }
}

function generatePassword() {
  selected.length = 0
  var needs_lower = confirm("Does your password require lowercase letters?")
  if (needs_lower == true) {
    merge(alphabet)
  }
  var needs_upper = confirm("Does your password require uppercase letters?")
  if (needs_upper == true) {
    merge(cap_alphabet)
  }
  var needs_numbers = confirm("Does your password require numbers?")
  if (needs_numbers == true) {
    merge(numbers)
  }
  var needs_special = confirm("Does your password require special characters?")
  if (needs_special == true) {
    merge(special)
  }

  if (needs_lower == false && needs_upper == false && needs_numbers == false && needs_special == false) {
    alert("You must select at least one character type. Please try again.")
    return
  }

  var pass_length = prompt("Please select a number between 8 and 128 for the length of your password.")
  Number(pass_length)
  if (isNaN(pass_length)) {
    alert("Please only use numbers when selecting password length. Please try again.")
    return
  } else if (pass_length < 8 || pass_length > 128) {
    alert("You must choose a number that is at least 8 and no more than 128. Please try again.")
    return
  }

  var final = ""
  for (i = pass_length; i > 0; i--) {
    var current = selected[Math.floor(Math.random()*selected.length)]
    final = final+ current
  }
  return final
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);