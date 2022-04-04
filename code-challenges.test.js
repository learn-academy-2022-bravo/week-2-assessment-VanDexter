// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// Pseudo code
// Create a functoin divisbleBy3
// using a conditional statement with a module %
// return outcome else not divisble by 3

describe("divisbleBy3", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    expect(divisbleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisbleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisbleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

// ✕ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)
//
// ● divisbleBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not



const divisbleBy3 = (number) => {
  if (number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

console.log(divisbleBy3(num1));
console.log(divisbleBy3(num2));
console.log(divisbleBy3(num3));

// ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// psuedo code
// create a funciton
// input will be array of strings
// .map to iterate
//  capitalize the value of the first index of each word in the array
// return results
// output an array with capitalized words

describe("capitalizeWords", () => {
  it("takes in an array of words and returns an array with all the words capitalized.", () => {
    expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
// ✕ takes in an array of words and returns an array with all the words capitalized. (1 ms)
//
// ● capitalizeWords › takes in an array of words and returns an array with all the words capitalized.




// b) Create the function that makes the test pass.

const capitalizeWords = (array) => {
  let eachItem = array.map(value => value[0].toUpperCase() + value.substring(1))
  return eachItem
}

console.log(capitalizeWords(randomNouns1));
console.log(capitalizeWords(randomNouns2));

    // ✓ takes in an array of words and returns an array with all the words capitalized. (2 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelCounter", () => {
  it("Create a function that takes in a string and logs the index of the first vowel.", () => {
    expect(vowelCounter(vowelTester1)).toEqual(1)
    expect(vowelCounter(vowelTester2)).toEqual(0)
    expect(vowelCounter(vowelTester3)).toEqual(2)
  })
})

// vowelCounter
//    ✕ Create a function that takes in a string and logs the index of the first vowel.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.

// pseudo code
// create a function
// input will be a string
// will need to do a for loops to go through each element in a string
// conditional statement to indentify vowel index per each string wiht .includes
// output will be the index of the vowel.


const vowelList = ["a", "e", "i", "o", "u"]
const vowelCount = 0

const vowelCounter = (string1) => {
for (let i=0; i<string1.length; i++)
 if (vowelList.includes(string1[i])) {
   return i
}
}

console.log(vowelCounter(vowelTester1));
console.log(vowelCounter(vowelTester2));
console.log(vowelCounter(vowelTester3));

    // ✓ Create a function that takes in a string and logs the index of the first vowel. (3 ms)
