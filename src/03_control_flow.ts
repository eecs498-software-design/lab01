// ============================================================================
// 03: Control Flow
// TypeScript supports familiar control flow structures:
//  - if-else
//  - switch
//  - for
//  - while
//  - do-while
// AI Disclaimer: Some portions of these examples and comments were generated
// using AI tools. Some were written by Claude, although there were kind of bad
// and we cleaned them up quite a bit.
// ============================================================================



// ----------------------------------------------------------------------------
// If-Else Statements
// ----------------------------------------------------------------------------

let score: number = 85;

if (score >= 90) {
  console.log("Grade: A");
}
else if (score >= 80) {
  console.log("Grade: B");
}
else if (score >= 70) {
  console.log("Grade: C");
}
else if (score >= 60) {
  console.log("Grade: D");
}
else {
  console.log("Grade: E");
}

// TypeScript ensures the condition is a "truthy" or "falsy" type.
// Loosely, those are the javascript terms for values that can
// be treated as true or false in a boolean context.


// EXERCISE:
// An optional type must be checked before use. Write an if statement
// below to check if 'name' is defined and only log its length if it is.
let name: string | undefined;

// intervening code that might assign a value to name

console.log(`The length of the name is ${name.length}`);



// ----------------------------------------------------------------------------
// == vs. ===
// ----------------------------------------------------------------------------
// Javascript supports (and thus TypeScript inherits) multiple "equality" operations:
//  == means "equal value" (with generous implicit conversions)
//  === means "equal value and equal type"

// EXERCISE: Consider the following variables and equality comparisons with
// == and ===. (Note that we've used any types here because otherwise the
// Typescript compiler will warn us about comparing different types.)
let num_five : any = 5;
let str_five : any = "5";

console.log(num_five == str_five, "Result is ___."); // replace ___ with true or false
console.log(num_five === str_five, "Result is ___."); // replace ___ with true or false

// In general, best practice is to ALWAYS use ===. There isn't really a case for ==.



// ----------------------------------------------------------------------------
// Switch Statements
// ----------------------------------------------------------------------------
// Useful for checking a value against multiple possibilities.
// Note the "fallthrough" behavior if 'break' is omitted.

let day: string = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Wednesday":
    console.log("Midweek");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular day");
}



// ----------------------------------------------------------------------------
// For Loop
// ----------------------------------------------------------------------------
// Typescript supports traditional for loops.

console.log("Counting to 5:");
for (let i: number = 1; i <= 5; i++) {
  console.log(i);
}

// EXERCISE:
// Write a for loop that prints the even numbers from 2 to 10.





// ----------------------------------------------------------------------------
// While Loop
// ----------------------------------------------------------------------------
// Typescript supports traditional while loops.

let countdown: number = 3;
console.log("Countdown:");
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Liftoff!");



// ----------------------------------------------------------------------------
// Do-While Loop
// ----------------------------------------------------------------------------
// Typescript supports traditional do-while loops.

let even_number: number;
do {
  // Generate a random number between 0 and 10 (not necessarily even)
  even_number = Math.floor(Math.random() * 11);
  console.log(`Generated: ${even_number}`);
} while ( even_number % 2 !== 0 ); // try again if not even

console.log(`Final even number: ${even_number}`);




// ----------------------------------------------------------------------------
// Break and Continue
// ----------------------------------------------------------------------------
// 'break' exits a loop early; 'continue' skips to the next iteration.

console.log("Printing numbers up through 7");
for (let i = 1; i <= 10; i++) {
  console.log(i);
  // Add code here that checks if i is 7 and breaks
}

console.log("Odd numbers only:");
for (let i = 1; i <= 10; i++) {
  // Add code here that checks if i is even (i % 2 === 0)
  console.log(i);
}
