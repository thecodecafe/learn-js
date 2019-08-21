---
id: data-types-summary
title: Data Types Summary
sidebar_label: Summary
---
So you've made it this far, this is great for you, in this section we covered all of the basics on data types in Javascript, we will be moving to data structures in the next section but for the time being lets have a quick look at what we covered.

1. Javascript is dynamicaly typed.
2. Javascript is weakly typed.
3. Javascript has five data types.
   * String
   * Number
   * Boolean
   * Null
   * Undefined
4. We can get the type a data belongs to using the typeof function.
5. Strings are used for data that has more to do with characters, words, or sentences.
6. Numbers are used for representing actual number values.
7. Strings with numbers in them are not treated as numbers unless they ar converted to numbers.
8. There are only two boolean values, true and false, and they are written as literals not strings.
9. Null means something has no value.
10. Undefined means the value of variable or property is not defined.

```js
// Checking Data Types
console.log(typeof("something")); // string
console.log(typeof(10));          // number
console.log(typeof(true));        // boolean
console.log(typeof(null));        // object
console.log(typeof(undefined));   // object

// String Concatination
console.log("I am " + "Human!"); // I am Human!

// Template Literals
let spacie = "Human";
console.log(`I am ${spacie}`); // I am Human!

// Numerical Values
console.log(1 + 1);   // 2
console.log("1" + 1); // 11
console.log(2 * "3"); // 6

// Undefined
let name;
console.log(name); // undefined
```