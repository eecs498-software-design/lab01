// ============================================================================
// 04: Array Iteration and Manipulation in TypeScript
// AI Disclaimer: Some portions of these examples and comments were generated
// using AI tools, primarily via Copilot autocomplete.
// ============================================================================

// Arrays are fundamental data structures in TypeScript/JavaScript.
// Modern JavaScript provides many powerful methods for working with arrays.

// ----------------------------------------------------------------------------
// Creating Arrays
// ----------------------------------------------------------------------------
// Use [] after a type to declare an array of that type
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Dustin", "El", "Lucas", "Max", "Mike", "Will"];

// A less common alternative syntax is similar to templates in C++:
let moreNumbers: Array<number> = [10, 20, 30];

// Heterogenous arrays can be created with union types, but use this sparingly:
let mixed: (string | number)[] = ["hello", 42, "world"];

console.log(numbers);

// ----------------------------------------------------------------------------
// Basic Array Operations
// ----------------------------------------------------------------------------

// Access by index (0-based)
console.log(numbers[0]);  // 1

// Get length
console.log(numbers.length);  // 5

// Add to end
numbers.push(6);
console.log(numbers);  // [1, 2, 3, 4, 5, 6]

// Remove from end
let last = numbers.pop();
console.log(last);      // 6
console.log(numbers);   // [1, 2, 3, 4, 5]

// Add to beginning
numbers.unshift(0);
console.log(numbers);   // [0, 1, 2, 3, 4, 5]

// Remove from beginning
let first = numbers.shift();
console.log(first);     // 0
console.log(numbers);   // [1, 2, 3, 4, 5]

// ----------------------------------------------------------------------------
// Iterating Over Arrays
// ----------------------------------------------------------------------------


// 1. Classic traversal by index
for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
}

// 2. for-of loop, similar to range-based for loop in C++
for (let num of numbers) {
    console.log(num);
}

// 3. forEach, a higher order function that calls a given function on each element
// We'll come back to this style soon when we cover the functional paradigm
numbers.forEach((num) => {console.log(num)});

// EXERCISE:
// Write a function called printBackwards that prints the elements of an array
// of numbers in reverse order. You're welcome to write this however you like.


printBackwards(numbers);