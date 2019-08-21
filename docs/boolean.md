---
id: boolean
title: Boolean
sidebar_label: Boolean
---
## What is Boolean
The boolean data types has only two possible values `true` and `false`, this values are used for resolving logic within your code, so when you are checking if somthing is equal to another thing the result will always be either of this two.
They are not strings but literals within your code.

### Figure 1
```
console.log(typeof(true));    // boolean
console.log(typeof('true'));  // string

console.log(typeof(false));   // boolean
console.log(typeof('false')); // string
```

### Figure 2
```js
if(true){
  // this will execute
}

if(false){
  // this will not execute
}
```
## Truthy Values
Now there are cases where you may not be directly interacting with the boolean data type but a value can be truthy in the sense that it means something is true, here is a list of truthy value.
1. Any number greater that zero.
2. A string with one or more characters.
3. An array with one or more items.
4. An Object.

## Falsy Values
Here is a list of values that can evaluate to false even though they are not of the boolean type.
1. Any number less than one.
2. A string with less than one character.
3. An empty array.
4. A null value.
5. An undefined value.

## Conclusion
The boolean data type is basically a means through which we can check if something is true or false, although there are other ways to check the truthiness of an expression.