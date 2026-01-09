// ============================================================================
// 02: Functions in TypeScript
// AI Disclaimer: Some portions of these examples and comments were generated
// using AI tools, primarily via Copilot autocomplete.
// ============================================================================

// ----------------------------------------------------------------------------
// Basic Function Declaration
// ----------------------------------------------------------------------------
// Take a look at the example function below. It explicitly specifies parameters
// types and a return type using the trailing type syntax.
//  a : number - parameter of type number
//  b : number - parameter of type number
//  add (...) : number

function add(a: number, b: number) : number {
  return a + b;
}

// If you don't specify a return type, TypeScript will infer it
// from the function's implementation:

function multiply(a: number, b: number) {
  return a * b; // return type inferred as number
}

function make_greeting(name: string) {
  return `Hello, ${name}!`; // return type inferred as string
}

// EXERCISE: Create a function greet_repeatedly() that takes
// in a name and a number of times to print a greeting. It
// should use make_greeting above as a helper function, assigning
// the created greeting to a variable. Then, use a loop to print
// the message via console.log() the desired number of times.
// We'll cover loops in the next exercise, but for now you can
// use this syntax:
//   for(let i = 0; i < num; ++i) {


greet_repeatedly("Francis", 5)


// ----------------------------------------------------------------------------
// Optional Parameters
// ----------------------------------------------------------------------------
// Use '?' to make parameters optional. Optional parameters must come after
// required parameters.

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

// EXERCISE: What does the ? on a parameter actually do in the type system?
// Figure out the proper type of the greeting parameter.
// Uncomment the line below that corresponds to the correct answer.
// console.log("A"); // string? 
// console.log("B"); // string | null
// console.log("C"); // string | undefined
// console.log("D"); // string

// ----------------------------------------------------------------------------
// Default Parameters
// ----------------------------------------------------------------------------
// You can provide default values for parameters.

function createUser(name: string, role: string = "user"): string {
  return `Created ${role}: ${name}`;
}

console.log(createUser("Charlie")); // "Created user: Charlie"
console.log(createUser("Diana", "admin")); // "Created admin: Diana"

// EXERCISE: In a similar way as the previous exercise, identify the proper type of the
// role parameter. Uncomment the line below that corresponds to the correct answer.
// console.log("A"); // string? 
// console.log("B"); // string | null
// console.log("C"); // string | undefined
// console.log("D"); // string

// Take a moment to think about why it's different than before (i.e. from the
// perspective of the function's implementation that uses the parameter), yet
// from the outside, the greet() and createUser() functions present the same interface.


// ----------------------------------------------------------------------------
// Functions are First-Class
// ----------------------------------------------------------------------------
// In TypeScript, functions are "first-class", meaning they can be created at
// runtime and passed around via variables and parameters. We'll come back to this
// later when we cover the functional paradigm, but it's worth mentioning now.

function subtract(a: number, b: number): number {
  return a - b;
};

// Assign a function into a variable.
let myFunc = subtract;

// EXERCISE: Observe that the type of myFunc must be inferred, since we don't
// explicitly annotate a type in the declaration. What type is inferred (hover
// over the variable to see its type). Uncomment the line below that corresponds
// to the correct answer:
// console.log("A"); // () => number
// console.log("B"); // number (a: number, b: number) => number
// console.log("C"); // (a: number, b: number) => number
// console.log("D"); // (x: number, y: number) : number

// EXERCISE: We can also create "higher-order functions" that take other functions
// as parameters. The apply_both_ways() function below is intended to take two numbers,
// plus a function that operates on two numbers and returns a resulting number.
// For example, when called as apply_both_ways(10, 4, subtract), it would print:
//  6
//  -6
// Complete the definition by filling in the missing type annotation for func.
function apply_both_ways(a: number, b: number, func: ) {
  console.log(func(a, b));
  console.log(func(b, a));
}

apply_both_ways(10, 4, subtract);