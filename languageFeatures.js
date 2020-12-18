/**
 * Code Formatting
 * style guide?
 *
 */

require('dotenv');

/**
 * `console.log`
 * When you're trying to debug some code you've written, the very most basic
 * way to get feedback is to print information out to the console. If you're
 * running Node in some server or from the command line, that output might
 * display in the terminal. In a browser, you'll view it through developer
 * tools.
 */

function stdOut(someValue) {
  console.log(someValue);
}

/**
 * var, let, const
 * In ES5 (an earlier language specification), you could declare a variable with
 * `var`.  In JavaScript, variables declared with `var` are scoped to the
 * nearest function.
 */

function scopeItOut() {
  if (true) {
    var x = 42;
  }
  console.log(x); // prints 42
}

/**
 * ES6 introduces two new options: `let` and `const`. They both are scoped to
 * the nearest block. Note that `const` creates a constant which cannot be later
 * overwritten.
 */
function scopeItIn() {
  const y = 32;
  if (!false) {
    let z = "stringy";
  }
  console.log(z); // error
  y = "another string";
}

/**
 * Function Declarations
 * In ES5, we declare functions much like those above, using the keyword
 * `function`, some identifier and may have parameters.
 */

function theBest(first, second, last) {
  return first + second + last;
}

/**
 * ES6 introduces other options: arrow funtions and default parameters.
 */

const arrowFunc = (aThing = "default", anotherThing, aThirdThing) => {
  return aThing + anotherThing + aThirdThing;
};

/**
 * Types, Objects, Collections
 * In Java and other strongly-typed languages, a variable must have a specific
 * type. This is not true in Javascript.
 */

const changingTypes = () => {
  let foo = 20; // It's a number
  foo = "Whan that Aprill with his shoures soote"; // It's a string
  foo = true; // And now it's a boolean
  console.log(typeof foo);
};

/**
 * A JavaScript object is very similar to a dictionary in other languages. In
 * point of fact, most of what we'd consider collections (maps, arrays, sets) in
 * other languages are objects in JavaScript.
 */

const object = {
  key: "a string value",
  validKey: 42,
  truth: false,
  aFunc: changingTypes,
};

// Note that we've just assigned a variable to a key in this object.

object.aFunc();

const anArray = [82, "heterogenous", object];

// In JavaScript a function can be passed as a parameter to another function.

function wrapper(someFunc) {
  const result = someFunc(42);
  return result;
}

function addTwo(toNumber) {
  return toNumber + 2;
}

console.log(wrapper(addTwo))

/**
 * Closures
 * JavaScript closures allow functions to access variables in scope when the
 * function was defined.
 */

const myCounter = () => {
  let counter = 0;
  return {
    increment: (inc) => {
      counter += inc;
    },
    getValue: () => {
      return counter;
    },
  };
};

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
 * ES6 introduced built in promises, which provide us an alternative for
 * handling asynchronous function completion. A promise represents the pending
 * completion of some code, which may either succeed (resolve) or fail (reject).
 * It is often represented by the `then` chained method.
 * 
 * Axios is a library for making network requests.
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

axios.get(options).then((response => {
  console.log("request completed!");
}));


/** 
 * Node Package Manager
 * By installing Node you've installed the Node package manager, `npm`. `npm` is 
 * used to manage dependencies and libraries you use in your application, much 
 * like the axios package used in the last example. I installed axios with the 
 * command `npm install axios`.
 * 
 * There are two ways to import a package. The preferred method in this class is
 * `require`
 */

const book = require('./book.js');

/**
 * You can see examples of exporting functions, objects and values from a module
 * in book.js.
 */

console.log(book.getBook('Moby Dick'));
