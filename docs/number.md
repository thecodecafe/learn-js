---
id: number
title: Number
sidebar_label: Number
---
## What Is Number?
The number data type in Javascripts type system is used to represent number values, these can be negative, positive, or decimal numbers. This data type allows for mathematical operations in Javascript and also in cases where you want to have a number value within your code.

### Figure 1
```js
console.log(1 + 1);  // 2
console.log(3 * 3);  // 9
console.log(4);      // 4
console.log(5.1);    // 5.1
console.log(3.02);   // 3.02
console.log(0.5885); // 0.5885
console.log(-20);    // -20
```
## Number In String
Now, to not get things mixed up, you can also have numerical values in a string, but that does not mean they will be treated as numbers, they will instead be treated string values, which means you can't perform mathematical operations on them, except in a case where an actual number is a part of the operation. Let's see the difference between a numerical string and a number.

### Figure 2
```js
console.log(1 + 1);     // 2
console.log("1" + "1"); // 11
console.log(1 + "1");   // 11
console.log(3 * "2");   // 6
console.log(3 * "a");   // NaN
```
As you can see when using the plus sign in between two number values, an addition is carried out, but when it's in-between two strings or a number and a string, concatination is carried out, the more dominant type between this two types when using the plus sign is the string.
In strictly typed language, adding a number to a string and viseversa will throw an error, because you can't add a string to a number, but Javascript is a loosely typed language, so it ustilizes a bahaviour called type coersion, this means when you bring two or more data together and try to perform some operation on them, like addition in the figure above, it tries to enforce a universal type on all the data within that operation and produces a result based on the chosen universal type.

### Figure 3
```js
console.log(typeof(2));   // number
console.log(typeof("2")); // string
```
In the above figure we can see that two enclose in a pair of quotation marks results in us having a string while, without them what we have is a number.

## NaN
NaN is short for not a number, this usually occures when we try to perform number only operations on a non numerical value. Although the type for NaN still translates to number, it is still not a number as the name suggests.
### Figure 4
```js
console.log(typeof(NaN)); // number
```

## Conclusion
To conclude we said that the number type is used to represent numerical values in their literal form, this allows for mathematical operations to be carried out on them, this makes them different from a string which contains numebrs. A string that contains numbers will behave like a string, it is nut seen as a numerical value by your computer but as a word tha tjust contains numbers.

We also said that Javascript is loosely types so when we try to add a string to a number, the number gets converted to a string and instead of an addition, a concatination operation is carried, but when we try to multiply or perform other mathematical oprations like multiplicatio, the string is converted to a number and the multiplication is carried out.

We also mentioned that whenever we try to perform a mathematical operation on a non numerical value we get `NaN` as result because the value of that operation is not a number.