//https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript

const CONSONANTS = "bcdfghjklmnpqrstvwxyz"

function countConsonants(str) {
  const seen = []
  for(let i = 0; i < str.length; i++) {
    if(CONSONANTS.includes(str.charAt(i).toLowerCase()) && !seen.includes(str[i].toLowerCase())) {
       seen.push(str[i].toLowerCase())
    }
  }
  return seen.length
}


// 1 - Think it out like a human first
// 2 - Start with what you know
// 3 - Make it stupid and crappy first

// str = Daddy
// dy
// return 2