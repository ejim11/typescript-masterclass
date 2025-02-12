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

// type systems
// unkwnown type

function multiplyByTwo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }

  return "Please provide a number";
}

// console.log(multiplyByTwo(3));
// console.log(multiplyByTwo("4"));

// Type aliases
// Declaration
type CustomString = string;

// let user: CustomString = "John";

// Annotation - assigning a type
let order: string = "0";

// inference
function addNumber(a: number, b: number) {
  return a + b;
}

const finalResult = addNumber(4, 2);

// Union types

type StringOrNumber = string | number;

let strOrNum: StringOrNumber = "dfknbfi";

strOrNum = 9;

// Quick conditional types
type CustomDate = Date;

type TrueString = CustomString extends string ? true : false;

type ConditionalNumber = CustomDate extends Date ? number : string;

type DateAssignment = CustomDate extends Date ? Date : undefined;

// never

const throwError = (msg: string) => {
  throw new Error(msg);
};

// type casting
let owner = <any>"Jim";

let owner2 = "Jim" as any;

let owner3 = {
  email: "x@gmail.com",
  name: "John",
};

type User = {
  email: string;
  name: string;
};

const fetchUser = () => {
  return owner3 as User;
};

// type aliases for objects

type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};

// readonly props once declared cannot be changed.

// index signatures

type AwardDetail = {
  name: string;
  date: Date;
};

type Awards = {
  [keyof: string]: AwardDetail;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string;
};

let post: Post = {
  title: "This is a post",
  content: "content",
  date: new Date(),
  author: {
    name: "John",
    age: 4,
    email: "example@onu.com",
    type: "human",
  },
  awards: {
    web: {
      name: "web",
      date: new Date(),
    },
    web3: {
      name: "web3",
      date: new Date(),
    },
  },
};

let post2: Post = {
  title: "This is a post",
  content: "content",
  date: new Date(),
  author: {
    name: "John",
    age: 4,
    email: "example@onu.com",
    type: "ai",
  },
  awards: {
    web: {
      name: "web",
      date: new Date(),
    },
    web3: {
      name: "web3",
      date: new Date(),
    },
  },
};

// union types with objects
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

const dog: DogAndCatUnion = {
  name: "buddy",
  barks: true,
  wags: false,
};

const cat: DogAndCatUnion = {
  name: "peller",
  purrs: true,
};

const hybrid: DogAndCatUnion = {
  name: "hoe",
  barks: true,
  wags: false,
  purrs: true,
};

// Discriminating unions

type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    durations: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "loading...";
    case "failed":
      return `Error: ${state.code}`;

    case "success":
      return `Success: ${state.response.title}`;
  }
}

type Cat1 = {
  name: string;
  purrs: boolean;
  color: string;
};

type Dog1 = {
  name: string;
  barks: boolean;
  color: string;
};

// intersection types
type HybridAnimal = Cat1 & Dog1;

const hybridAnimal: HybridAnimal = {
  name: "Buffy",
  color: "black",
  purrs: true,
  barks: false,
};

// Arrays

let nums: number[] = [3, 2];

let b: Array<string> = ["a", "d"];

let c: (string | number)[] = [1, "d"];

type Airplane = {
  model: string;
  flightNumber: number;
};

type Airplanes = Airplane[];

const airplanes: Airplanes = [{ model: "airbus", flightNumber: 3223 }];

// tuples

const person: [string, string, number] = ["joe", "james", 8];

type User1 = [string, string, number, string?];

const user1: User1 = ["joe", "james", 5];

type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "adre", "sete", "mark"];

type StringsBooleanNumbers = [string, ...boolean[], number];

let s: StringsBooleanNumbers = ["", true, false, 3];

// readony arrays and tuples

let numsRd: readonly number[] = [2, 3];

type ReadOnlyTuple = readonly [string, string, number];

let per: ReadOnlyTuple = ["ejim", "james", 34];

type a = Readonly<string[]>;

type b = ReadonlyArray<string | number>;

type c = Readonly<[string, string, number]>;

// enums

enum Direction {
  Up = "up", //0
  Down = "down",
  Left = "left",
  Right = "right",
}

// console.log(Direction.Up);

enum Roles {
  ADMIN = "admin",
  USER = "user",
}

type Person1 = {
  name: string;
  role: Roles;
};

const pers1: Person1 = {
  name: "person",
  role: Roles.ADMIN,
};

// if you don't want the enums to be compiled to js then you can use the const keyword

const enum EDirections {
  Up,
  Down,
}

// casting an obj as a const converts the props to readonly, making it like an enum

const ODirection = {
  up: 0,
  down: 1,
} as const;

// computed enums

enum AccessPermissions {
  None,
  Read,
  Write,
  ReadWrite = Read + Write,
  Delete,
  All = ReadWrite | Delete,
}

// enums as union and types

enum ShapeKind {
  Circle = "circle",
  Square = "square",
}

type Cirle = {
  kind: ShapeKind.Circle;
  radius: number;
};

type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
};

let circle: Cirle = { radius: 23, kind: ShapeKind.Circle };

// (function printShap(shape: ShapeKind) {
//   console.log(shape);
// })(ShapeKind.Circle);
