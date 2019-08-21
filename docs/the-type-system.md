---
id: the-type-system
title: The Type System
sidebar_label: The Type System
---
## Data Types
Every programme is primarliy built to understand data, but data cannot be understood if it has no context for usage, this is where data types come in, data types help tell your computer what kind of data it is dealing with at every point in time, data types are basically context for the application and manipulation of data.

In javascript we have five data types and they are all meant to be used for different kinds of operations. These data types are.
* String
* Number
* Boolean
* Null
* Undefined
We will be looking deeper into each individual data type as we go on, but for now you can familiarize yourself with these names.

## Dynamically Typed
Javascript is an intepreted language, this means an interpreter is used to convert Javascript code to machine language as it is being executed, because of this Javascript is dynamically types, this means that type checking for data within your code is done as it is being executed, and if you're thinking errors a re more likely to happen in production then you're right, although there are techniques you can apply to avoid this.
<div class="take-note">

<i class="em em-bulb"></i> The exact opposite of dynamic type is static type, examples of languages that are statically typed are **C, C++, Java, etc.**
</div>

## Weakly Typed
Another term you should be aquanted with when learning Javascript is **Weakly Typed**, weakly typed languages are languages that allow data types to be changed at run time, this means a variable containing a number can be changed to contain a string instead while your application is being executed, these kind of languages also in some cases employ the use of type coersion, this is a case where a type is enforced on a value just so that the operation being carried out will continue, although the results aren't always what is expected, but this is one other tool to have in your utility belt.
<i class="em em-bat"></i>

## Checking Type Of
Javascript allows us to check the type of a value as our application is being ran, this is useful to help ensure we get the result we expect per operation, this is made possible using the `typeof` function.
### Figure 1
```js
console.log(typeof('Jon')); // string
console.log(typeof(29));    // number
console.log(typeof(true));  // boolean
```

In the up coming sections we will be looking at how we can take advantage of Javascripts type system for building software applications.