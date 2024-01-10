// single line comment

/* das ist ein multi line comment */

// string data type
console.log("Hello World");

//arithmetic operators
console.log(1 + 5);
console.log(567 + 19375);
console.log(5 - 1);
console.log(6 * 6);
console.log(99 / 10);

//comparison operators
console.log(1 == 3);
console.log(1 <= 1);
console.log(1 != 2);

//strict equal operator
console.log(1 === 1);
console.log(1 !== 2);

//logical operators
console.log(2 > 1 && 8 < 7);
console.log(5 === 5 || 4 < 2);
console.log(!(1 === 1));

//grouping operator
console.log((2 + 5) * 7);

//concatenation operator
console.log("My " + "name " + "is " + "Doro ");

//Coding-Task:
// 02)
console.log("D" + "o" + "r" + "o" + "t" + "h" + "e" + "a");

console.log("Hallo");

console.log("That doesn't work");

console.log(50 + 2 >= 52);

console.log(!"333" == 333);

console.log((600 + 510) / 2);

console.log(2 + 2);

console.log(25 / 5 === 5 && 50 / 10 === 5);

function test() {
  console.log("Funktioniert die Funktion?");
}

test();

function myfunction() {
  return "Hallo";
}

console.log(myfunction());

//03)

function welcomeMsg(a) {
  return "Welcome " + a + "!";
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));
console.log(welcomeMsg("Lorenz"));
console.log(welcomeMsg("Maria"));
console.log(welcomeMsg("Christoph"));
console.log(welcomeMsg("Aaron"));

function calcGrossPrice(a, b) {
  return a + a * b;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

function addPositive(a, b) {
  if (a < 0) {
    a = a * -1;
  }
  if (b < 0) {
    b = b * -1;
  }
  return a + b;
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

//typeof operator
let myvar = "Doro";

console.log(typeof myvar);

myvar = 5;

console.log(typeof myvar);

//04)
const userName = "Jenna";

console.log(userName);

function getUserNameLength() {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);

let isString = function (data) {
  result = typeof data;
  return result === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true

//05)
const size = 25;

if (size > 10 && size <= 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

function oddEven(a) {
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

function oldYoung(a) {
  if (a < 16 && a > 0) {
    return "children";
  } else if (a < 50 && a > 0) {
    return "young person";
  } else if (a >= 50) {
    return "elder person";
  } else if (a < 0 || a !== typeof number) {
    return "invalid parameter";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("Doro"));
