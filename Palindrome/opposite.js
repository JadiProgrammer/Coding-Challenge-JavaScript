// Versi Junior 🤠
const isPalindrome = (str) => {
  let arr = str.split("");
  let toPalindrome = [];

  for (let i = arr.length; i >= 0; i--) {
    toPalindrome.push(arr[i]);
  }
  if (str.toLowerCase() === toPalindrome.join("").toLowerCase()) return console.log("Palindrome");
  else return console.log("Bukan Palindrome");
};

// Hasilnya Palindrome
isPalindrome("kasur rusak");
isPalindrome("level");

// Harus Palindrome
isPalindrome("Racecar");
isPalindrome("Mom");

// Hasilnya harus false
isPalindrome("123");

// Versi Pro 😎
// const isPalindrome = (str) => {
//   let arr = str.split("");
//   let toPalindrome = arr.slice().reverse();

//   if (arr.join("") === toPalindrome.join("")) return console.log("Palindrome");
//   else return console.log("Bukan Palindrome");
// };

// isPalindrome("kasur rusak");
// isPalindrome("123");
