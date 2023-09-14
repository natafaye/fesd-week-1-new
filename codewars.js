
// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

// function findAdmin(list, lang) {
//   const matches = []
//   for(let i = 0; i < list.length; i++) {
//     if(list[i].githubAdmin === "yes" && list[i].language === lang) {
//       matches.push( list[i] )
//     }
//   }
//   return matches
// }

function findAdmin(list, lang) {
    // find takes a callback function that returns true if it's a match and false if it's not a match
    return list.filter(developer => developer.githubAdmin === "yes" && developer.language === lang)
}








// function findAdmin(list, lang) {
//     // find takes a callback function that returns true if it's a match and false if it's not a match
//     return list.find( developer => developer.githubAdmin === "yes" && developer.language === lang )
// }

// // somewhere inside find's code
// callback({ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' })
// callback({ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' })
// callback({ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' })
// callback({ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' })


// describe("somdfdslfds", function() {

// })


// let a = first thing passed in, let b = second thing passed
// const addNumbers = (a, b) => a + b

// let something = 3



// console.log("3 + 5",   addNumbers(3, 5)   )

// addNumbers(4, 7)






// var list1 = [
//     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ];


// console.log("Find JS admins in list 1", findAdmin(list1, "JavaScript"))


// var list2 = [
//     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'Ruby', githubAdmin: 'yes' },
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'Python', githubAdmin: 'yes' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
// ];

// console.log("Find python admins in list 2", findAdmin(list2, "Python"))








// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

function isSameLanguage(list) {
    const firstDeveloper = list[0]

    // check if all the items in the array match the language of the first developer
    const matches = list.filter(developer => developer.language === firstDeveloper.language)

    return matches.length === list.length
}