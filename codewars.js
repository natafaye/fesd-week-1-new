// Ones and Zeros
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
    let total = 0
    // loop through the array and adding each number times the place it's in to the total
    for (let i = 0; i < arr.length; i++) {
        total += (arr[arr.length - i - 1] * Math.pow(2, i))
    }
    return total
};

// const binaryArrayToNumber = arr => {
//   // loop through the arry and times each one by the place it's in
//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * Math.pow(2, arr.length - i - 1)
//   }
//   // Sum them
//   const total = arr.reduce((total, num) => total + num)
//   return total
// };


// 1011

// total + 1000 + 0 + 10 + 1

// total += 8 + 0 + 2 + 1



// Simple Fun: Reverse Letter
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

const letters = "abcdefghijklmnopqrstuvwxyz"

// function reverseLetter(str) {
//   //coding and coding..
//   const strArray = str.split("")
//   const result = []
  
//   while(strArray.length) {
//     const character = strArray.pop()
//     if(letters.includes(character)) {
//       result.push(character)
//     }
//   }
  
//   return result.join("")
// }

function reverseLetter(str) {
  return str
    .split("") // turn string into an array of characters
    .reverse() // reverse
    .filter(character => letters.includes(character)) // only keep letters
    .join("") // turn array back into string
}

// function reverseLetter(str) {
//   return str.split("").reverse().join("").replace(/[^a-z]/ig, "") // /[^a-z]/ig = reg ex for not a-z case insensitively, search the whole string
// }