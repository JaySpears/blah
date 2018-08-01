////////////////
// Question 1 //
////////////////

/********************************************************/
/* How to write a polyfill for reduce method of arrays. */
/********************************************************/

Array.prototype.reducePolyfill = reducePolyfill;

/**
 * function reducePolyfill, polyfill for reduce prototype.
 *
 * @param {Function} callback, executes once values are passed.
 * @return {Number} accumulator, final value of array values.
 */
function reducePolyfill(callback) {
  // Current total value.
  var accumulator;
  // Iterate over this, which is the array we chained off of.
  for (var i = 0; i < this.length; i++) {
    // First iteration.
    if (!i) {
      accumulator = this[i];
    } else {
      // Pass values into the callback for debugging purposes.
      accumulator =+ callback(accumulator, this[i]);
    }
  }
  // return value.
  return accumulator;
}

///////////////////////////////////////////////
// Logging the answer to prove that it works //
///////////////////////////////////////////////

var testArray = [1,2,3];

// NOTE: Feel free to replace the addition sign with any mathematical operator.
var testArrayValue = testArray.reducePolyfill(function(accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log('Reduce polyfill answer for [' + testArray + ']: ' + testArrayValue);








////////////////
// Question 2 //
////////////////

/* In an array of arrays, e.g. given
[[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []],
print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.( Flatten a nested array) */

var testArrayTwo = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []];
var testArrayTwoFlattened = [].concat.apply([], testArrayTwo);

///////////////////////////////////////////////
// Logging the answer to prove that it works //
///////////////////////////////////////////////

console.log('Flattened array value for question 2: ' + testArrayTwoFlattened);








////////////////
// Question 3 //
////////////////

/* What would be the output of the code and why?

for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);
}  */

// Answer: The answer would be 3. I believe once this for loop executes, the setTimeout has a reference of the passed value stored in memory.








////////////////
// Question 4 //
////////////////

/* Write a function called eval, which takes a string and returns
a boolean. This string is allowed 6 different characters: 0, 1, &, |, (, and ).
eval should evaluate the string as a boolean expression, where 0
is false, 1 is true, & is an and, and | is an or. */

/**
 * function eval, takes a string and returns
 * a boolean.
 *
 * @param  {String} str
 * @return {Boolean}     [description]
 */
function eval(str) {
  // NOTE: Since this function is called eval, which is a native function for executing strings, I'll have to
  // execute this string via a function.
  var stringToExecute = str
    .replace(/\0/g, 'false')
    .replace(/\1/g, 'true')
    .replace(/\&/g, '&&')
    .replace(/\|/g, '||');
  return setTimeout(stringToExecute, 100) ? true : false;
}

///////////////////////////////////////////////
// Logging the answer to prove that it works //
///////////////////////////////////////////////

console.log('Eval function returns boolean: ' + eval('(0 | (1 | 0)) & (1 & ((1 | 0) & 0))'));









////////////////
// Question 5 //
////////////////

/* Generate all subsets of a string For Eg ‘water’ should generate ‘wa’, ‘wat’, ‘wate’ etc */
/**
 * function generateSubsets, returns all possible substrs
 * of the passed string.
 *
 * @param  {String} str
 * @return {Array}
 */
function generateSubsets(str) {
  var arrayOfSubsets = [];
  for (var i = 1; i < str.length; i++) {
    arrayOfSubsets.push(str.substr(0,i));
  }
  return arrayOfSubsets;
}

///////////////////////////////////////////////
// Logging the answer to prove that it works //
///////////////////////////////////////////////

console.log('Substrings: ' + generateSubsets('Howdy'));
