// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
    let result = ""

    // loop backwards through each letter in the string
    for (let i = str.length - 1; i >= 0; i--) {
        console.log("result[i]", result[i])
        console.log("result", result)
        console.log("i", i)
        if (str[i].toLowerCase() !== str[i].toUpperCase()) { // if it's alphabetic
            result += str[i]
        }
    }

    return result
}

"krishan"
"nahsirk"

  // look at the string
  // starting at the end of the string, look at each letter in the string
  // if the letter is alphabetic, then add it the end of the new string