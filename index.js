"use strict";
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
function addNumbers(a, b) {
    return a + b;
}
// console.log(addNumbers(2, 3));
// console.log(addNumbers(3932, 3));
/////////////////////////////////////////
// Either through annotation or inference
// strings
var firstname = "john";
let automobile = "bmw";
const city = "new York";
// numbers
var age = 56;
let day = 23;
const numOfLetters = 62;
// booleans
let isStudent = true;
const alwaysStudent = true;
//////////////////////////////////////
// undefined
let user;
// console.log(user);
let userRole;
// userRole = null;
// console.log(userRole);
////////////////////////////////////
// Bigint
const safeInt = Number.MAX_SAFE_INTEGER;
// console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
// console.log(safeIntPlusOne, safeIntPlusTwo);
let bigInt1 = BigInt(safeIntPlusTwo);
let bigInt2 = 232322n;
// console.log(bigInt1, bigInt2);
/////////////////////////////////////////
// symbols
let id = Symbol(1234);
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
function multiplyByTwo(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide a number";
}
// let user: CustomString = "John";
// Annotation - assigning a type
let order = "0";
// inference
function addNumber(a, b) {
    return a + b;
}
const finalResult = addNumber(4, 2);
let strOrNum = "dfknbfi";
strOrNum = 9;
// never
const throwError = (msg) => {
    throw new Error(msg);
};
// type casting
let owner = "Jim";
let owner2 = "Jim";
let owner3 = {
    email: "x@gmail.com",
    name: "John",
};
const fetchUser = () => {
    return owner3;
};
let post = {
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
let post2 = {
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
const dog = {
    name: "buddy",
    barks: true,
    wags: false,
};
const cat = {
    name: "peller",
    purrs: true,
};
const hybrid = {
    name: "hoe",
    barks: true,
    wags: false,
    purrs: true,
};
function logger(state) {
    switch (state.state) {
        case "loading":
            return "loading...";
        case "failed":
            return `Error: ${state.code}`;
        case "success":
            return `Success: ${state.response.title}`;
    }
}
const hybridAnimal = {
    name: "Buffy",
    color: "black",
    purrs: true,
    barks: false,
};
// Arrays
let nums = [3, 2];
let b = ["a", "d"];
let c = [1, "d"];
const airplanes = [{ model: "airbus", flightNumber: 3223 }];
// tuples
const person = ["joe", "james", 8];
const user1 = ["joe", "james", 5];
const passingStudents = [3, true, "adre", "sete", "mark"];
let s = ["", true, false, 3];
// readony arrays and tuples
let numsRd = [2, 3];
let per = ["ejim", "james", 34];
// enums
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
// console.log(Direction.Up);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
})(Roles || (Roles = {}));
const pers1 = {
    name: "person",
    role: Roles.ADMIN,
};
// casting an obj as a const converts the props to readonly, making it like an enum
const ODirection = {
    up: 0,
    down: 1,
};
// computed enums
var AccessPermissions;
(function (AccessPermissions) {
    AccessPermissions[AccessPermissions["None"] = 0] = "None";
    AccessPermissions[AccessPermissions["Read"] = 1] = "Read";
    AccessPermissions[AccessPermissions["Write"] = 2] = "Write";
    AccessPermissions[AccessPermissions["ReadWrite"] = 3] = "ReadWrite";
    AccessPermissions[AccessPermissions["Delete"] = 4] = "Delete";
    AccessPermissions[AccessPermissions["All"] = 7] = "All";
})(AccessPermissions || (AccessPermissions = {}));
// enums as union and types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "circle";
    ShapeKind["Square"] = "square";
})(ShapeKind || (ShapeKind = {}));
let circle = { radius: 23, kind: ShapeKind.Circle };
// (function printShap(shape: ShapeKind) {
//   console.log(shape);
// })(ShapeKind.Circle);
// Functions
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Month"] = "month";
})(AgeUnit || (AgeUnit = {}));
function convertAgeToMonth(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Month;
    }
    return person;
}
console.log(convertAgeToMonth({
    name: "John",
    age: 53,
    ageUnit: AgeUnit.Years,
    greet: (text) => text,
}).greet("Hello world"));
// void and never
function writeToDatabase(value) {
    console.log("Writing to database", value);
}
function throwErr(message) {
    throw new Error(message);
}
// async functions
async function returnString(value) {
    return Promise.resolve(value);
}
async function findUser(id) {
    return Promise.resolve({ name: "john", age: 3 });
}
// rest parameters
function multiplyBy(by, ...numbers) {
    return numbers.map((num) => num * by);
}
// args
const args = [4, 3];
const angle = Math.atan2(...args);
const args1 = [5, 3];
const angle1 = Math.atan2(...args1);
let numbers = {
    a: 3,
    b: 3,
    c: 1,
};
function sum({ a, b, c }) {
    return a + b + c;
}
console.log(sum(numbers));
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === "string") {
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
function returnParams(param) {
    return param;
}
const return1 = returnParams("ejim");
const myParam = (param) => param;
const myParams2 = function (param) {
    return param;
};
const getFirstElement = (arr) => {
    return arr[0];
};
const numsArr = [2, 3, 4, 3, 2, 4, 5, 65, 5, 65];
const strArr = ["d", "f", "a"];
const firstElementStr = (arr) => {
    return arr[0];
};
const firstElementNum = (arr) => {
    return arr[0];
};
function logLength(item) {
    console.log("length: ", item.length);
}
const stringNumberPair = {
    key: "ejim",
    value: 55,
};
const numberArrPair = {
    key: 242,
    value: ["d"],
};
function printId(obj) {
    console.log(obj.id);
}
let idOfEvent = "id";
let stringObject = {
    1: "",
};
let partial = {
    name: "John",
};
// Generic default values
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchDefault() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    // console.log(data);
}
async function fetchPost() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}
// implementing a polymorphic function
const filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
let numss = [1, 2, 34, 5, 6];
function predicate(item) {
    return item > 7;
}
let animals = ["cat", "dog", " rat"];
function filterCat(item) {
    return item === "cat";
}
console.log(filter(numss, predicate));
console.log(filter(animals, filterCat));
const mapFunc = (array, func) => {
    if (array.length === 0) {
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
};
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(mapFunc(numbersArr, (num) => {
    return num.toString();
}));
// Classes
class UserClass {
    constructor(name, email, lastname) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
    }
    greet(msg) {
        return `Hello ${this.name}, ${msg}`;
    }
}
const userInstance = new UserClass("Ejim Favour", "favour@email.com");
userInstance.lastname = "ernest";
// userInstance.email = "";
console.log(userInstance.greet("Your account has been created successfully!"));
// Inheritance
class AdminClass extends UserClass {
    constructor(usersReporting, name, email, lastname) {
        super(name, email, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
}
const admin = new AdminClass(50, "Mark", "mark@gmail.com");
console.log(admin);
class Book {
    constructor(title, author, ISBN, yearPublished) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        if (yearPublished)
            this.yearPublished = yearPublished;
    }
}
const book1 = new Book("Mars: Our new home", "Jimmy xd", "joi94039", 2049);
function logBookDetails(book) {
    console.log(book);
}
logBookDetails(book1);
class Ebook extends Book {
    constructor(fileSize, format, title, author, ISBN, yearPublished) {
        super(title, author, ISBN, yearPublished);
        this.fileSize = fileSize;
        this.format = format;
    }
}
const ebook1 = new Ebook(2, "pdf", "Space and time", "Ernesto", "inei493");
console.log(ebook1);
// Access modifiers
