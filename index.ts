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

// Functions
enum AgeUnit {
  Years = "years",
  Month = "month",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  greet: (greeting: string) => string;
};

function convertAgeToMonth(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Month;
  }

  return person;
}

console.log(
  convertAgeToMonth({
    name: "John",
    age: 53,
    ageUnit: AgeUnit.Years,
    greet: (text: string) => text,
  }).greet("Hello world")
);

// void and never
function writeToDatabase(value: string): void {
  console.log("Writing to database", value);
}

function throwErr(message: string): never {
  throw new Error(message);
}

// async functions

async function returnString(value: string): Promise<string> {
  return Promise.resolve(value);
}

type Gamer = {
  name: string;
  age: number;
};

async function findUser(id: number): Promise<Gamer> {
  return Promise.resolve({ name: "john", age: 3 });
}

// rest parameters
function multiplyBy(by: number, ...numbers: number[]): number[] {
  return numbers.map((num) => num * by);
}

// args
const args = [4, 3] as const;

const angle = Math.atan2(...args);

const args1: [number, number] = [5, 3];

const angle1 = Math.atan2(...args1);

// parameter destructuring

type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbers: Numbers = {
  a: 3,
  b: 3,
  c: 1,
};

function sum({ a, b, c }: Numbers) {
  return a + b + c;
}

console.log(sum(numbers));

// FUNCTION OVERLOADING

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination,
    };
  } else if (typeof returnDateOrDepartingFrom === "string") {
    return {
      departureDate,
      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }

  throw new Error("Please provide details");
};

// console.log(reserve(new Date(), "New york", "washington"));

// Generics
function returnParams<Type>(param: Type): Type {
  return param;
}
const return1 = returnParams<string>("ejim");

const myParam: <T>(param: T) => T = (param) => param;

const myParams2 = function <U>(param: U): U {
  return param;
};

type ObjectType = {
  myParam: <T, C>(param: T, param2: C) => T | C;
};

type myParam = <L>(param: L) => L;

type GetFirstElement = <T>(arr: T[]) => T;

const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

const numsArr = [2, 3, 4, 3, 2, 4, 5, 65, 5, 65];

const strArr = ["d", "f", "a"];

// console.log(getFirstElement(numsArr));
// console.log(getFirstElement(strArr));

// writing seperate functions for each of the types
type FirstElement<T> = (arr: T[]) => T;

const firstElementStr: FirstElement<string> = (arr) => {
  return arr[0];
};

const firstElementNum: FirstElement<number> = (arr) => {
  return arr[0];
};

// Generics and constraints with arrays
type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  console.log("length: ", item.length);
}

// console.log(logLength([3, 4, 5]));

// console.log(logLength("4"));

// generics with numbers

type keyValuePair<K, V> = {
  key: K;
  value: V;
};

const stringNumberPair: keyValuePair<string, number> = {
  key: "ejim",
  value: 55,
};

const numberArrPair: keyValuePair<number, string[]> = {
  key: 242,
  value: ["d"],
};

type HasId = {
  id: number;
};

function printId<T extends HasId>(obj: T): void {
  console.log(obj.id);
}

// keyof operator

type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type UnionOfKeysOfEvents = keyof Events;

let idOfEvent: UnionOfKeysOfEvents = "id";

type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
};

type NumberAndStringKeyOf = keyof NumberAndString;

let stringObject: NumberAndString = {
  1: "",
};

type Persons = {
  name: string;
  age: number;
  address: string;
};

type PartialPersons = {
  [K in keyof Persons]?: Persons[K];
};

let partial: PartialPersons = {
  name: "John",
};

// Generic default values

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  const data = await response.json();

  return data;
}

async function fetchDefault() {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  // console.log(data);
}

// fetchDefault();

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPost() {
  const data = await fetchData<Posts>(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log(data);
}

type Filter = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
};

// implementing a polymorphic function
const filter: Filter = <T>(
  array: T[],
  predicate: (item: T) => boolean
): T[] => {
  let result: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

let numss = [1, 2, 34, 5, 6];

function predicate(item: number) {
  return item > 7;
}

let animals = ["cat", "dog", " rat"];

function filterCat(item: string) {
  return item === "cat";
}

console.log(filter(numss, predicate));

console.log(filter(animals, filterCat));

const mapFunc = <T, U>(array: T[], func: (item: T) => U): (U | T)[] => {
  if (array.length === 0) {
    return array;
  }

  let result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }

  return result;
};

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
  mapFunc(numbersArr, (num) => {
    return num.toString();
  })
);

// Classes

class UserClass {
  name: string;
  readonly email: string;

  lastname?: string;

  constructor(name: string, email: string, lastname?: string) {
    this.name = name;
    this.email = email;
    this.lastname = lastname;
  }

  greet(msg: string) {
    return `Hello ${this.name}, ${msg}`;
  }
}

const userInstance: UserClass = new UserClass(
  "Ejim Favour",
  "favour@email.com"
);

userInstance.lastname = "ernest";

// userInstance.email = "";

console.log(userInstance.greet("Your account has been created successfully!"));

// Inheritance

class AdminClass extends UserClass {
  isAdmin: boolean = true;
}

const admin = new AdminClass("Mark", "mark@gmail.com");

console.log(admin);
