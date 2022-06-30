function isPalindrome(word) { //function given for the assignment where the code will invoke if the word is a palindrome
  // Write your algorithm here
  let reversed = word.split("").reverse().join(""); //variable will take string/word break it up, reverse the array and bring the array back together
  if (reversed === word) return true; // verify if the word reversed is the same with boolean 
  return false;
}
console.log("abba")
console.log("racecar")
console.log("a")
console.log("robot")
console.log("ab")
/* 
  Add your pseudocode here
  create function that will take the word/string as a parameter
  break the word up and reverse it
  if the reversed word is equel to word then it is true
  if not it is falsy 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
