const students = [
  {
    name: "John",
    score: 17,
  },
  {
    name: "Mark",
    score: 28,
  },
];

for (const stud of students) {
  //   console.log("Name: ", stud.name);
  //   console.log("Score: ", stud.score);
}

//////////////////////////////////////

function addNumbers(a: number, b: number): number {
  return a + b;
}

// console.log(addNumbers(2, 3));
// console.log(addNumbers(3932, 3));

/////////////////////////////////////////

// Either through annotation or inference
// strings

var firstname: string = "john";

let automobile = "bmw";

const city: string = "new York";

// numbers
var age: number = 56;

let day = 23;

const numOfLetters = 62;

// booleans
let isStudent: boolean = true;

const alwaysStudent = true;
