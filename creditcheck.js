function drop(cardNumber) {
  var charDrop = cardNumber.charAt(15)
  var cardNumberDrop = cardNumber - cardNumber.charAt(15)
}

function reverseString(cardNum) {
  // Step 1. Use the split() method to return a new array
  var splitString = cardNum.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

function multiply(cardNum) {
  var char1 = ((parseInt(cardNum.charAt(1)) * 2))
      char1 += (char1 > 9) * (-9)
  var char3 = ((parseInt(cardNum.charAt(3)) * 2))
      char3 += (char3 > 9) * (-9)
  var char5 = ((parseInt(cardNum.charAt(5)) * 2))
      char5 += (char5 > 9) * (-9)
  var char7 = ((parseInt(cardNum.charAt(7)) * 2))
      char7 += (char7 > 9) * (-9)
  var char9 = ((parseInt(cardNum.charAt(9)) * 2))
      char9 += (char9 > 9) * (-9)
  var char11 = ((parseInt(cardNum.charAt(11)) * 2))
      char11 += (char11 > 9) * (-9)
  var char13 = ((parseInt(cardNum.charAt(13)) * 2))
      char13 += (char1 > 9) * (-9)
  var char15 = ((parseInt(cardNum.charAt(15)) * 2))
      char15 += (char15 > 9) * (-9)


  var addNumber = char1 + char3 + char5 + char7 + char9 + char11 + char13 + char15
  addNumber += parseInt(cardNum.charAt(2)) + parseInt(cardNum.charAt(4)) + parseInt(cardNum.charAt(6)) + parseInt(cardNum.charAt(8)) + parseInt(cardNum.charAt(10)) + parseInt(cardNum.charAt(12)) + parseInt(cardNum.charAt(14))

  return addNumber
}

function modulo(addNumber) {
  var modulo = addNumber % 10
  return modulo
}

function final(modulo, charDrop) {
  alert ("Card ok? " + modulo == charDrop)
}

function cardCheck() {
  var cardNumber = prompt("Enter Card Number")
  drop(cardNumber)
  reverseString(cardNumberDrop)
  multiply(joinArray)
  modulo(addNumber)
  final(modulo, chardrop)
}
