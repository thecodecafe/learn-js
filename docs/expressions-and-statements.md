---
id: expressions-and-statements
title: Expressions & Statements
sidebar_label: Expressions & Statements
---

Just like other programming languages, everything code you will write in Javascript will either a statement or a syntax, this two components come together to make the bulk of what your Javascript code is trying to say or do.

## Expression
An expression to simply put is any process within your code that evaluates to a single value, this can be achieved using literals, operators, or other expressions.
<div class="take-note">

<i class="em em-bulb"></i> A literal is any alpha, numeric, or special character that is not data but may contain data within your code, for example, the **console** keyword is a literal.
</div>

Majorly there are two kinds of expressions, there are those that assign value, and others that just have value.

### Value Assigning Expression
```js
let number = 2;
```
The code above is an expression that assigns the value 2 to a variable. We will look more into variables in a bit, just stay with me.

### Value Containing Expression
```js
1 + 1;
```
The code above evaluates to 2 but does not assign that value to anything.

## Statement
A statement is simply a combination of key words that make up the instruction you tell a computer to perform at ever point in time. Statements can span multiple lines or be on a single line, you can also have multiple statements on a single line, that are seperated by semicolons.

### Single-Line Statement
Is on a single line.
```js
let name = "Jane";
```
### Multi-Line Statement
Spans multiple lines.
```js
if(janeIsAlive()){
  callJane();
}
```
### Multiple Single-Line Statements
Has multiple single line statements on the same line.
```js
let name = "Jane"; let age = 24; height = 6.1;
```

## Conclusion
So in conclusion we said in this section that:
* Our code comprises of two main things which are expressions and statements.
* Expressions are processes within our code that evaluate to a single value.
* There are two kinds of expressions, the one that assigns value and the one that contains value.
* Statements are the instructions given to a computer by our code, when our application is being run.
* There are single-line statements and multi-line statements.
* Single-line statements start and end on the same line of code.
* Multi-line statements span multiple lines of code.

In the next section we will be looking at comments and how to use them within our code.