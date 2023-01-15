// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


document.getElementById("generate").onclick = function() {

  let randomPassword = "";
  let passwordLength = prompt("Enter length of password (between 10 and 64 characters):");

  while (passwordLength < 10 || passwordLength > 64 || passwordLength == "" || isNaN(passwordLength)) {

      alert("Invalid number. Please enter a number between 10 and 64.");
      passwordLength = prompt("Enter length of password (between 10 and 64 characters):");
  }

  let includeLowercase = confirm("Include lowercase characters in password?");
  let includeUppercase = confirm("Include uppercase characters in password?");
  let includeNumeric = confirm("Include numeric characters in password?");
  let includeSpecial = confirm("Include special characters in password?");

  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {

      alert("Select at least one character type for password.");
      includeLowercase = confirm("Include lowercase characters in password?");
      includeUppercase = confirm("Include uppercase characters in password?");
      includeNumeric = confirm("Include numeric characters in password?");
      includeSpecial = confirm("Include special characters in password?");
  }

  let charTypesArr = [];

  if (includeLowercase) charTypesArr.push(lowerCasedCharacters);
  if (includeUppercase) charTypesArr.push(upperCasedCharacters);
  if (includeNumeric) charTypesArr.push(numericCharacters);
  if (includeSpecial) charTypesArr.push(specialCharacters);

  // Generate password
  for (let i = 0; i < passwordLength; i++) {

      let charTypeArr = charTypesArr[Math.floor(Math.random() * charTypesArr.length)];
      let char = charTypeArr[Math.floor(Math.random() * charTypeArr.length)];
      randomPassword += char;
  }

  var passwordText = document.querySelector('#password');

  passwordText.value = randomPassword;

  return randomPassword;
}