// https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript

const CONSONANTS = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"

function countConsonants(str) {
  const foundAlready = []
  for(let i = 0; i < str.length; i++) {
    if(CONSONANTS.includes(str[i]) && !foundAlready.includes(str[i].toLowerCase())) {
        foundAlready.push(str[i].toLowerCase())
    }
  }
  return foundAlready.length
}

// loop through the letters of the string
// if its a consonant
// and if its not already in the array of consonants
// add it to the array of consonants
// return the length of the array