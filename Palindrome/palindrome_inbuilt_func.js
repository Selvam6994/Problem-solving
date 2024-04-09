const palindrome = (str) => {
  let revStr = str.split("").reverse().join("");
  if (str === revStr) {
    return "Is palindrome";
  } else {
    return "Not a palindrome";
  }
};
console.log(palindrome("madam"));
