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
