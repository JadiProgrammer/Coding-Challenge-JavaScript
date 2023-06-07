# Palindrome
- Penjelasan simple nya mungkin seperti ini, jika kita punya kalimat yang dimana kita mau bacanya dari  kiri ke kanan atau dari kanan ke kiri, urutan karakternya tetap sama. Contohnya, kata "level", kata "level" sendiri adalah sebuah palindrome karena jika kita membacanya dari depan maupun belakang, urutan karakternya tetap sama.

contoh:
- kasur rusak dibalik kasur rusak => Palindrome
- 123 dibalik 321 => bukan palindrome

Langkah pertama adalah kita Buat fungsi dengan nama `isPalindrome()`, dan jangan lupa untuk menambahkan argumennya, seperti ini, `isPalindrome(str)`, kalian bisa menggunakan berbagai macam cara untuk mendeklarasikan fungsinya seperti `function isPalindrome(str)` atau `const isPalindrome = (str) =>`.

- kalian bisa menambahkan variabel baru bertipe array dengan nama `arr` atau seperti ini `let arr = []`, lalu kita tambahkan method `split('')` dengan bertujuan untuk mengubah tipe string yang ada di argument menjadi array seperti ini `[h,e,l,l,o, w,o,r,l,d]`,

```javascript
const isPalindrome = (str) => {
let arr = str.split('');
    
    console.log(arr) =>  // Output ["h","e","l","l","o", "w","o","r","l","d"],
}

// Test Case 
isPalindrome('Hello World')
```

### lalu kita looping karena kita ingin looping mundur maka lakukan cara seperti ini

- Jika kalian tidak yakin / takut jika hasilnya merupakan infinite loop maka kalian bisa menambahkan `break;`, sedikit penjelasan `break;` itu adalah sebuah cara untuk menghentikan atau keluar dari loop secara paksa

```javascript
for (let i = arr.length; i >= 0; i--) {
if (i === -1) {
break;
} else if (i === 12) {
break;
}
console.log(arr[i]);
}
```

jika sudah yakin kode kita aman dari infinite loop kita boleh menghapus kode if else nya.
```javascript
for (let i = arr.length; i >= 0; i--) {
console.log(arr[i]);
}
```

### Setelah kita looping langkah selanjutnya apa?
- Hasil dari looping mundur tadi, bisa kita masukan ke variabel baru, dan kalian bisa membuat variabel baru yang bertipe array seperti ini `let toPalindrome = []`, 


maka kode tadi akan seperti ini 
```javascript
const isPalindrome = (str) => {
  let arr = str.split("");
  let toPalindrome = [];
};
```

Jangan lupa karena kita ingin memasukan nilai dari looping mundur alias `arr[i]` ke dalam array, maka kita gunakan method `push()`, 
method `push()` sendiri adalah sebuah cara / method yang kita gunakan untuk memasukan nilai apapun ke dalam array.

update kode kalian menjadi seperti ini 
```javascript
const isPalindrome = (str) => {
  let arr = str.split("");
  let toPalindrome = [];
  
    for (let i = arr.length; i >= 0; i--) {
    toPalindrome.push(arr[i]);
  }
};
```


### Now What?, setelah berhasil kita looping mundur, sudah waktunya untuk kita melakukan validasi/ logic yang nantinya akan nge cek apakah kalimat ini palindrome atau tidak
- kita bisa membuat logic seperti ini, jika string yang ada di dalam argumen str tersebut sama dengan hasil string yang kita balik, maka itu adalah palindrome, jika tidak maka bukan palindrome, sebelum kita melakukan perbandingan itu, kita harus menggunakan method `join("")` yang digunakan untuk menggabungkan semua elemen dalam array toPalindrome menjadi satu string tanpa ada pemisah, karena kita menampungnya dalam sebuah array, dan mungkin kalian juga perlu coba sendiri sih cara pakai method `join("")` ini seperti `join()`, `join(' ')`, `join('#')`, `join("# ")`
```javascript
  if (str === toPalindrome.join("")) return console.log("Palindrome");
  else return console.log("Bukan Palindrome"); 
```

maka keseluruhan kodenya akan menjadi seperti ini
```javascript
const isPalindrome = (str) => {
  let arr = str.split("");
  let toPalindrome = [];
  
    for (let i = arr.length; i >= 0; i--) {
    toPalindrome.push(arr[i]);
  }
   if (str === toPalindrome.join("")) return console.log(`${str} adalah kalimat Palindrome`);
   else return console.log(`${str} Bukan kalimat Palindrome`);
};

// Test Case TRUE/Palindrome
isPalindrome("kasur rusak");
isPalindrome("level");
isPalindrome("121");

// Test Case False/Bukan Palindrome
isPalindrome("aku ganteng");
isPalindrome("yo ndak tau");
isPalindrome("hello world");
```

Selamat mencoba 🧐
