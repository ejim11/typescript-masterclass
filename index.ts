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

//////////////////////////////////////

// undefined

let user: undefined;

// console.log(user);

let userRole: null;

// userRole = null;

// console.log(userRole);

////////////////////////////////////

// Bigint

const safeInt = Number.MAX_SAFE_INTEGER;
// console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

// console.log(safeIntPlusOne, safeIntPlusTwo);

let bigInt1: bigint = BigInt(safeIntPlusTwo);

let bigInt2: bigint = 232322n;

// console.log(bigInt1, bigInt2);

/////////////////////////////////////////

// symbols
let id: symbol = Symbol(1234);
let alphabeticId = Symbol("id");

const users = {
  [id]: "1232",
  name: "John",
  getId() {
    return this[id];
  },
};

// console.log(users.getId());
