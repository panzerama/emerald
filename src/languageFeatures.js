require('dotenv').config();

/**
 * `console.log`
 */

function stdOut(someValue) {
  console.log(someValue);
}

stdOut("to the console!");

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

console.log('x outside a function is ' + x);

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

anObject.aFunc();

const anArray = [82, "heterogenous", anObject];

// In JavaScript a function can be passed as a parameter to another function.

function wrapper(someFunc) {
  const result = someFunc(42);
  return result;
}

function addTwo(toNumber) {
  return toNumber + 2;
}

console.log(wrapper(addTwo));

/** Strings */
// String concatenation
// Template string

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

/**
 * Classes, Prototypes, the `this` keyword, and Method Chaining 
 */

/** map/filter/reduce */

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

someAsync(42, printValue);

/**
 * You can also pass an anonymous function in as a callback
 */

someAsync(42, (value) => { console.log(value) })
 
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
 * Modules
 */

const book = require('./book.js'); // note that code in the module isn't 
                                   // executed until it's imported

console.log(book.getBook('Moby Dick'));

//import { byPriceAsc, getPrice } from './book.js';

//console.log(getPrice('Tom Sawyer'));
