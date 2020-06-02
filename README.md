# Functional Programming (FP) katas in Typescript

## FP Concepts

1. Pure functions vs. procedures (side effects)
1. Higher order functions / Functions as data
1. Closures
1. Composing functions
1. Partial application / currying functions
1. Persistent data structures

# Pure functions

A pure function is a function that has no side effects, it cannot interact with the outside world for any of
its computation. A pure function is a mathematical equivalent of mapping one value in set A to a value in set B.
Think of types like strings, numbers, booleans as sets and functions just map a value in one type to a value in another
type.

```typescript
function add(x: number, y: number) {
  return x + y;
}
```

Above function makes no queries to the outside world, it only uses the constructs of the language and its inputs to
respond with an output.

## Functions as data

In the functional world, functions are not just blocks of code to be executed, they are treated as data!

Here's an example

```typescript
const myText = "Hello, World" // This is a primitive string, it's data
const myNumber = 9 // This is a primitive number, it's also data
const myCalculator = (x, y) => x + y // This is a function definition, it's also data!
```

The function above is **declared**, not called/invoked. What we're doing here is defining **how** (declarative) 
something should compute, rather than **what** (procedural) should be computed. It is declared much like the
primitive values as a constant variable.

```typescript
console.log(myText) // Prints the text
console.log(myNumber) // Prints the number
console.log(myCalculator) // This prints the function declaration
console.log(myCalculator(15, 15)) // Now it is invoked! Now it prints the result
```

# Higher order functions

Since functions are data, the logical next step is to be able to pass functions into other functions and 
return functions from functions.

A function that either receives another function as input or produces a function
as its output is called a **higher order function** or (HoC).

```typescript
// Higher order function that takes in a function as its second parameter
const isValid = (value, test: (value: any) => boolean) => {
  return test(value);
}

// We call valid and define a test function to pass inline.
isValid("Hello, World", (value) => value.length < 20);

// We can break it apart (functions are data!)
const lengthIsLessThan20 = (value) => value.length < 20;

// Pass in the function reference, don't call it.
isValid("Hello, World", lengthIsLessThan20); 

// Reuse isValid for many different cases
isValid("Hello, World", (value) => value.startsWith("Hello")); 
isValid("Hello, World", (value) => value.endsWith("World")); 
isValid("Hello, World", (value) => value.length % 2 === 0);
```

# Closures

In FP, pure functions cannot use anything but built-in constructs that the language allows 
(like if-else, &&, ||, &, etc.) and the input the function was provided with. 

Limiting and frustrating!

So how then can we work with pure functions to construct meaningful programs? 

**Composing new functions via higher-order functions and things called _closures_!**

A closure is a context in which a function is enclosed with its surrounding state.

By constructing a higher order function that returns a new function every time it is called, this new 
function that is returned has some of the properties of the higher order function baked into it.

E.g.

```typescript
const taskStore = () => {
  const data = [{ id: 1, value: "buy groceries"}, { id: 2, value: "make the bed"}];
  
  /** return a function! which has now bound itself to `data` **/
  return {
    search: (value) => data.find(item => item.value.startsWith(value))
  }
}

// Search the store
console.log(taskStore().search("make the"));
// -> returns { id: 2, value: "make the bed" } item
```

# Partial application and currying

# Composing functions

# Persistent data structures

