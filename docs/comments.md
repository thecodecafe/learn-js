---
id: comments
title: Comments
sidebar_label: Comments
---
Comments are used within our code to tell other developers what our code is meant to do, they mainly invented for that purpose although today, they are used for more than just that, depending on the language you're coding with. Your text within your comments will not executte while your code is running.

## Two Types Of Comments
It's some sort of a running gag already that there are two or more types of anything in Javascript so let's just quickly look at the two types of comments we have.

### Inline Comments
Inline comments are used in cases where a comment only spans a single line of code, that is, we do not break into a new paragraph when writing the comment, they are the faster and easier way to write comments in Javascript. They start with two forward slashes, a space, and then the comment you would like to make. See correct and incorrect ways to write comments below.

**Correct (recommended)**
```js
// This code makes birds fly.
```
The correct and recommended method of writting inline comments is correct because we write the whole comment in a single line.

**Incorrect**
```js
// This code makes
birds fly.
```
The incorrect method of writting inline comments is incorrect because we broke out of the comment paragraph and started a new line, this will throw an error in our code, because birds and fly will be seen as literals within our code.

**Correct (not recommended)**
```js
// This code
// makes birds fly.
```
The correct but not recommended method of writting inline comments is correct because for each line we started with two forward slashes but is not recommended for two reasone, the first reason is that we already have a solution for multiline comments so we shouldn't be using this for that, the second reason is that we are adding unnecessary lines to our code when our comment can be written on a single line.

### Multiline Comments
Multiline comments are comments that span multiple lines, this is good for when your comment cannot fit into a single line, or we need to add some more data to properly describe what we are commenting on. The multiline comment starts with a forward slash, asterisk sign, and space and ends with a space, an asterisk sign, and a forward slash. See mutiline comment example below.

**Recommended**
```js
/*
  The quick brown fox jumped over the lazy dog, but one day when the
  fox tried to jump over the lazy dog, there was no dog to jump over,
  so the quick brown fox jumped over the lazy dog no more.
*/
```
This is recommended because as you can see it utilizes the multiline commenting method to properly lump a couple of paragraphs into one comment in a clean manner.

**Not Recommended**
```js
/*
  This code makes birds fly.
*/
```
This is not recommended because the comment itself can be written in the very same way on a single line.

## Conslusion
In this section we said:
* Comments are used for describing what our code does.
* Code written within our comments do not execute when our code is being run.
* There are two types of comments and they are, inline and multiline comments.
* Inline comments are used for writing comments on a single line.
* Multiline comments are used for writing comments that span multiple lines.

Finally I'll say, the recommended methods for using the two types of comments are what I stand by but this is all based on preference, you might find yourself working in teams that use them differently but the recommended use in this section is the standard for most teams or organisations.