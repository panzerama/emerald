require('dotenv').config();

/**
 * `console.log`
 */

function stdOut(someValue) {
  console.log(someValue);
}

// Example
// stdOut("to the console!");

/**
 * var, let, const
 */

var x = 35;

function scopeItOut() {
  if (true) {
    var x = 42;
  }
  console.log('x inside a function is ' + x); // prints 42
}

// console.log('x outside a function is ' + x);

function scopeItIn() {
  const y = 32;
  console.log('x is ' + x);
  if (!false) {
    let z = "stringy";
  }
  console.log(z); // error
  y = "another string";
}

// try it out
// scopeItOut()
// scopeItIn()

/**
 * Function Declarations
 */

function theBest(first, second, last) {
  return first + second + last;
}

const arrowFunc = (aThing = "default", anotherThing, aThirdThing) => {
  return aThing + anotherThing + aThirdThing;
};

/**
 * Types, Objects, Collections
 */

const changingTypes = () => {
  let foo = 20; // It's a number
  foo = "Whan that Aprill with his shoures soote"; // It's a string
  foo = true; // And now it's a boolean
  console.log(typeof foo);
};

const anObject = {
  key: "a string value",
  validKey: 42,
  truth: false,
  aFunc: changingTypes,
};

// anObject.aFunc();

const anArray = [82, "heterogenous", anObject];

// In JavaScript a function can be passed as a parameter to another function.

function wrapper(someFunc) {
  const result = someFunc(42);
  return result;
}

function addTwo(toNumber) {
  return toNumber + 2;
}

// console.log(wrapper(addTwo));

/** Strings */
// String concatenation
let firstString = 'first';
let secondString = 'second';
let fourthString = 'fourth';

// console.log(firstString + ' ' + secondString + ' ' + fourthString);

// Template string
const stringFunc = () => { 'this string' }

// console.log(`We can use a function to insert ${stringFunc} into this string`);

/**
 * Control Statements, Truthiness/Falsiness
 * JavaScript provides the kind of control structures we'd expect: if/else
 * statements, while loops, try/catch/finally. In addition, JavaScript has a
 * novel way of evaluating true and false for values.
 */

//Some Values are Falsey and Truthy
// Falsey - evaluates to false
var isNull = null;
var isUndef = undefined;
var isFalse = false;
var isZero = 0;

// Truthy - evaluates to true
var isDef = "Hello, world!";
var isTrue = true;
var isNotZero = 1;

// if (isNull) {
//   console.log('truthy!');
// }
// else {
//   console.log('falsey');
// }

/** 
 * Asynchronous JavaScript
 * A synchronous operation blocks the execution of operations after it. This is
 * inefficient, and Node is designed to give us another option. Asynchronous
 * operations only execute when some prerequisite condition is met.
 * One of the most common ways to achieve this is to provide a callback.
 */

function someAsync(inputValue, callbackFunc) {
  for (let i; i < 1000000; i++) {
    inputValue++;
  }
  callbackFunc(inputValue);
}

const printValue = (value) => {
  console.log(value);
}

// Example
// someAsync(42, printValue);

/**
 * You can also pass an anonymous function in as a callback
 */

// Example
// someAsync(42, (value) => { console.log(value) })
 
/** 
 * Promises
 */

const axios = require('axios').default;

var options = {
  method: 'GET',
  url: 'https://dark-sky.p.rapidapi.com/47.608013,-122.335167',
  params: {lang: 'en', units: 'auto'},
  headers: {
    'x-rapidapi-key': process.env.DARK_SKY_KEY,
    'x-rapidapi-host': 'dark-sky.p.rapidapi.com'
  }
};

// Example
// axios(options).then((response => {
//   console.log(response);
// })).catch((error) => {
//   console.log(error);
// });

/**
 * Classes, Prototypes, the `this` keyword, and Method Chaining 
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  coordinateString() {
    return `(${this.x}, ${this.y})`;
  }

  static pointDistanceFrom(point, otherx, othery) {
    let a = Math.abs(point.x - otherx);
    let b = Math.abs(point.y - othery);
    return Math.floor(Math.pow(Math.pow(a, 2) + Math.pow(b, 2), .5));
  } 
}

class Rectangle {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }

  area() {
    return length * height
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

// What does it look like under the hood?
// Refer to Chapter 9 of JavaScript: The Definitive Guide

// Example
// const point = new Point(3, 4);
// console.log(point.coordinateString());
// console.log(Point.pointDistanceFrom(point, 5, 6));
// const square = new Square(5);
// console.log(square.area());

// Get this!

const test = {
  prop: 42,
  func: function() { // The context is the object with prop 42
    return this.prop; // so this.prop evaluates to 42
  },
};

// console.log(test.func());

// Implicit Binding "to the left of the dot"
const context = {
  a: 2,
  f: function (something) {
    console.log(this.a);
    return something + 5;
  }
};

console.log(context.f(5));

// Demo Mixins!
// tbd

/** 
 * map/filter/reduce 
 */

let cities = [
  "New York City",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco"
]

let oneCity = cities.filter((city) => {
  return city === "San Francisco"
})

// console.log(oneCity);

function modifyCity(city) {
  return "City of " + city
}

let modifiedCities = cities.map(modifyCity);
// console.log(modifiedCities);

let values = [3, 16, 13, 20, 10, 14, 18, 10, 12, 14]
let sum = values.reduce((aggregator, number) => aggregator + number, 0);
// notice the implicit return above!
// console.log(sum);

/** 
 * Modules
 */

// const book = require('./book.js'); // note that code in the module isn't 
//                                    // executed until it's imported

// console.log(book.getBook('Moby Dick'));

//import { byPriceAsc, getPrice } from './book.js';

//console.log(getPrice('Tom Sawyer'));
