// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: "B" "r" "a" "v" "o" " " "2" "0" "2" "2"
// b) Verify and explain: the dot notation .split seprates all elements into a string in the order of the index position!


// --------------------2) What will this log?
//
const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))


// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: got baited on this one. There is no "return" =/
// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))



// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 6, 7, 8]
// b) Verify and explain: I had to stare at this one for a while to see if there was any trickery or tomfoolery. The dot notation .map copies the array and returns a new array multplied by the *2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: Similar to the previous question .filter takes an array and returns a modified verison of it. The module % 2 !==0 makes it return an odd.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: the dot notation of the key languages in myCodingskills calls upon that array. [0] specifies the position of the array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: George "Bravo", 2022
// b) Verify and explain: Forgot to include the key titles. The class Learn has three keys that are called on by learnStudent. George is filled in since name is the only constructor.
