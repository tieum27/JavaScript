//store temps
var temp = 14
function fConversion() {

  console.log(temp + "C is " + (((temp * 9) / 5) + 32) + "F") ;
}

// Temperature Converter
function fConversion(cTemp) {
  alert (cTemp + "C is " + (((cTemp * 9) / 5) + 32) + "F") ;
}

function cConversion(fTemp) {
  alert (fTemp + "F is " + (((fTemp - 32) * 5) / 9) + "C") ;
}

// input Temperature
function converter() {
  var temp = parseInt(prompt("Enter a temperature in Celsius"));
  var fTemp = (cTemp + "C is " + (((cTemp * 9) / 5) + 32) + "F");
  return alert(fTemp);
}
// Ui Temperature
function fConversion(cTemp) {
  return (cTemp + "C is " + (((cTemp * 9) / 5) + 32) + "F") ;
}

function cConversion(fTemp) {
  return (fTemp + "F is " + (((fTemp - 32) * 5) / 9) + "C") ;
}
function tempConverter() {
  var userConversion = prompt ("What conversion do you want?\n1 for F\n2 for C");
  var userTemp = prompt ("what temperature?");

  if (userConversion === 1){
    alert(fConversion(userTemp))
  }
  else {
    alert(cConversion(userTemp))
  }
}



// functions challenge
function twoNum(num1, num2) {
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(num1 / num2);
  console.log(num1 + num2);
}
//greeting
 function greeting() {

  var name = prompt("What is your name?");
  alert("Hello " + name);
 }
//reverse
function reverse(word, index) {
  return word.charAt((word.length - 1) - index);
}

// lifetime supply

function lifetime(age, amount) {
  var maxAge = 90;
  var year = maxAge - age;
  var yearAmount = amount * 365;
  console.log(yearAmount * year);
}
