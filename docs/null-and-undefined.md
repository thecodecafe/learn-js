---
id: null-and-undefined
title: Null & Undefined
sidebar_label: Null & Undefined
---
## What is Null?
Null is a value that stands for nothing, it is used to infer that an expression evaluates to nothing. With a quirk, if you try to check the type of Null, it returns object as its type.
### Figure 1
```js
console.log(typeof(null)); // object
```
This is a bug in Javascript that hasn't been changed solely because the change will break existing code, it has been this way since the inception of Javascript, hopefully it will be fixed one day and we will all be free... Not sure from what though.

So to simply put `null` means an expression has evaluated to nothing.

## What is Undefined?
Undefined is the default value of any thing that has been declared but not given a value.
### Example 1
```js
let name;
console.log(name); // undefined
```
In the example above, we created a variable called name and didn't give it a value, this resulted in it having an undefined value.

The quirk to the Undefined type also is that when we try to check it's type using the type function, it also returns null as its type, this also stands as a result of the bug in the type function. 
### Figure 2
```js
console.log(typeof(undefine)); // object
```
This is a bug in Javascript but hasn't that hasn't been changed solely because the change will break existing code, it has been this way since the inception of Javascript, hopefully it will be fixed one day and we will all be free... Not sure from what though.

To simply put `undefined` means a variable has not been assigned a value.

## Conclusion
These to data types are basically ways to say something has no value, although it is better not explicitly set anything to undefined, use null instead if you want to unset the value of any variable or property in your code.