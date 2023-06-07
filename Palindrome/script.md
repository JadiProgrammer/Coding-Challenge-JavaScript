dividio ini sesuai judul kita akan bahas tentang soal yang cukup populer ya, nama soalnya adalah opposite, jadi   
# Palindrome
- Penjelasan simple nya mungkin seperti ini, jika kita punya kalimat yang dimana kita mau bacanya dari  kiri ke kanan atau dari kanan ke kiri, urutan karakternya tetap sama. Contohnya, kata "level" adalah sebuah palindrome karena jika kita membacanya dari depan maupun belakang, urutan karakternya tetap sama.

contoh
kasur rusak dibalik kasur rusak => Palindrome
123 dibalik 321 => bukan palindrome

### buat fungsi dengan nama `isPalindrome()`, dan jangan lupa untuk menambahkan argumennya, seperti ini, `isPalindrome(str)`, kalian bisa menggunakan berbagai macam cara untuk mendeklarasikan fungsinya seperti `function isPalindrome(str)` atau `const isPalindrome = (str) =>`.

- kalian bisa menambahkan variabel baru bertipe array dengan nama `arr` atau seperti ini `let arr = []`, lalu kita tambahkan method `split('')` dengan bertujuan untuk mengubah tipe string yang ada di argument menjadi array seperti ini `[h,e,l,l,o, w,o,r,l,d]`,

``javascript
const isPalindrome = (str) => {
let arr = str.split('');

    console.log(arr) =>

}

// Test Case 
isPalindrome('Hello World')
``

### lalu kita looping karena kita ingin looping mundur maka lakukan kode ini

- Jika kalian tidak yakin / takut jika hasilnya merupakan infinite loop maka kalian bisa menambahkan `break;`, sedikit penjelasan `break;` itu adalah sebuah cara untuk menghentikan atau keluar dari loop secara paksa

``
for (let i = arr.length; i >= 0; i--) {
if (i === -1) {
break;
} else if (i === 12) {
break;
}
console.log(arr[i]);
}



``
jika sudah yakin kode kita aman dari infinite loop kita boleh menghapus kode if else nya.
``javascript
for (let i = arr.length; i >= 0; i--) {
console.log(arr[i]);
}
``

maka kode tadi akan seperti ini 
``javascript
const isPalindrome = (str) => {
  let arr = str.split("");

  for (let i = arr.length; i >= 0; i--) {
    toPalindrome.push(arr[i]);
  }
};

``

### Now What?, setelah berhasil kita looping mundur, sudah waktunya untuk kita tampung ke dalam variabel baru karena kita akan melakukan validasi/ logic yang nantinya akan nge cek apakah kalimat ini palindrome atau tidak
``
const isPalindrome = (str) => {
  let arr = str.split("");
  let reverseStr = [];

  for (let i = arr.length; i >= 0; i--) {
    toPalindrome.push(arr[i]);
  }
};
``

### setelah kita berhasil me looping mundur isi dari string nya, kita tampung ke dalam array dengan method `toPalindrome.push(arr[i])`

- maka illustrasinya akan seperti ini

### Kita buat logic untuk ngecek apakah kalimat yang ada di argument itu palindrome atau bukan.

- kita bisa membuat logic seperti ini, jika string yang ada di dalam argumen str tersebut sama dengan hasil string yang kita balik, maka itu adalah palindrome, jika tidak maka bukan palindrome, sebelum kita melakukan perbandingan itu, kita harus menggunakan method `join("")` yang digunakan untuk menggabungkan semua elemen dalam array toPalindrome menjadi satu string tanpa ada pemisah, karena kita menampungnya dalam sebuah array, dan mungkin kalian juga perlu coba sendiri sih cara pakai method `join("")` ini seperti `join()`, `join(' ')`, `join('#')`, `join("# ")`

`javascript
  if (str === toPalindrome.join("")) return console.log("Palindrome");
  else return console.log("Bukan Palindrome"); 
`
