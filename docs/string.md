---
id: string
title: String
sidebar_label: String
---
## What Is String?
A string is a sequence of alpha, numeric, or special character(s) that is data and that is treated as a word, sentence, or character, in our code.
We create strings by enclosing our words or characters in a pair of single or double quotation marks, see the examplr below.
### Example 1
```js
console.log('this is a string'); // this is a string
console.log("this is a string"); // this is a string
```
Regardless of what method you choose to create your string it will result in you having the same thing; a collection of characters that are treated as data within your code.

## Concatination
Concatination is the majority of the string manipulation being done in any software programme, this basically is the process of joining two strings together, this is achieved using the plus `+` sign in-between two strings. Let's see what that looks like.
### Example 2
```js
console.log("Hello, " + "world!"); // Hello, world
```
in the expression above, we were able to join two strings (`Hello,` and `world`) into one using the plus sign, this results in us having one string which is `Hello, world`, this in a nutshell is what string concatination is.

## Template Literals
A template literal is a way to concatenate strings while allowing embedded expressions and improving readability.
Creating a template literal is similar to how we would normally create a string, only in this case instead of using a pair of quotation marks we would be using two back-tick characters to enclose whatever we want to represent as string.
This method however does not just create a string but also allows for embedded expressions, these can either be variables, a mathmatical operation, etc.
Let's break down an example.

### Example 3
```js
let firstName = "Naruto";
let village = "Konoha";

let sentence = `My name is, ${firstName}, I am from ${village}.`;
// My name is Naruto, I am from Konoha.; 
```
In the code above we used the template literal to create a sentence and then within the sentence referenced our variables, which contain the data we want to add to our sentence. Each variable is referenced using the dollar sign `$`, a pair of curly braces `{}`, and then in-between the curly braces we put the name of the variable we would like to have the value of in that part of the sentence, this produces a sentence like so `My name is Naruto, I am from Konoha.`

<div class="take-note mb-3">
<i class="em em-bulb"></i>
Variables are containers we use to move data around in our code, they can contain any "type" of data. 
</div>

## Escaping Characters
Escaping characters allows us do two things.
1. Add invalid characters to our string, these are characters that can make our code throw an error.
2. Display characters that normally won't be displayed when we output our string to an interface.

To escape a character we will need to add the backslash(`\`) right before the character we would like to escape.
### Example 4
```js
console.log("Add the double quote(\") to the output.");
// Add the double quote(") to the output.

console.log('This isn\'t a test.');
// This isn't a test.

console.log("Show the backslash(\\) sign.");
// Show the backslash(\) sign.
```
This comes in handy when we want to add a pair of double quotes inside a double quoted string, an apostrophe sign in a single quoted string, or want to show the backslash in a string output.
There are several other use cases but this should help you see the relevance of being able to escaping characters.

## Conclusion
Wo in this section we said, strings are used to contain words, sentences, or characters that is data and not a keyword within our code, we also said that multiple strings can be joined together through an opearion called concatination, and that concatination can also be achieve using template literals, and also more than just to help facilitate concatination, template literals allow us to embed expressions within a string, this makes reading code easier for other developer, finally we said that there are times we would want to add invalid characters, or non-displayable to our string output, and we can do that by placing a backslash right before the character we would like to include in our string output.