/*****
 *
 *
 * Check for a palindrome
 */

const isPalindrome = (word) => {
  if (word.split("").reverse().join("") === word) {
    return `'${word}' is palindrome.`;
  } else {
    return `'${word}' is not a palindrome.`;
  }
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
