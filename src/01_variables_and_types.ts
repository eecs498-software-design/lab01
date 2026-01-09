// ============================================================================
// 01: Primitive Types in TypeScript
// ============================================================================

// ----------------------------------------------------------------------------
// Variable Declarations with Type Annotations
// ----------------------------------------------------------------------------
// Declare variables using the let keyword.
// Provide a variable name and trailing type annotation.
let a: number = 25;
let b: number = 19.99;
let c: string = "hello";
let d: boolean = false;

// ----------------------------------------------------------------------------
// Type Inference
// ----------------------------------------------------------------------------

// TypeScript can often infer the type based on the assigned value.
// Hover over the variables below to see the inferred types:
let x = 42;
let y = 3.14;
let message = "hi";
let isActive = true;

// Generally speaking, it's fine practice to rely on type inference unless you
// specifically want to constrain a type in a certain way that isn't inferred.

// ----------------------------------------------------------------------------
// Strings
// ----------------------------------------------------------------------------
// String literals can be defined with single quotes or double quotes.
// There is no difference between the two.
let firstName = 'Jane';
let lastName = "Hopper";

// If you need to include quotes inside a string, use the other type of quote:
let quote1 = "She said, 'Hello!'";
let quote2 = 'He replied, "Hi there!"';

// You can also define "template literals" using backticks (`).
// This allows for string interpolation using ${...} syntax.
let welcomeMessage = `Welcome, ${firstName} ${lastName}!`;

// The ${...} syntax can include any expression:
let aNum = 5;
let bNum = 10;
let sumMessage = `The sum of ${aNum} and ${bNum} is ${aNum + bNum}.`;

// A string literal can span multiple lines when using backticks:
let multiLine = `This is line one.
This is line two.
This is line three.`;


// EXERCISE:
// Declare a variables for:
//  - a person's name
//  - their pet's name
//  - how many years they've had the pet
// Then create a greeting message using a template literal that says:
//   Hello [person's name]! I heard you have a pet named [pet's name].
//   You've had [pet's name] for [number of years] years!
// Print the greeting message to the console using console.log().



// ----------------------------------------------------------------------------
// The undefined Keyword and Optional Types (with undefined)
// ----------------------------------------------------------------------------
// Sometimes a variable might not have a value yet, or we may want to represent
// an optional value that may or may not be present. TypeScript uses 'undefined'
// to represent this. You can use a union type with 'undefined' to allow this:

// These variables may or may not have a number value:
let val1: number | undefined;  // We don't have a val1 initially
let val2: number | undefined = 10;  // We do have a val2

// Ope, jk... let's get rid of val2. Note that undefined is a type, but it's also
// a keyword representing the absence of a value (kind of like nullptr in C++).
val2 = undefined;

// We could later come in and assign values to both...
// val1  = 5;
// val2 = 10;

// EXERCISE: Observe the error here. The TypeScript compiler analyzes the code and
// sees that these values might be undefined at this point. Uncommenting the lines
// above that assign values to val1 and val2 to see the error go away.
// In contrast to C++, issues like uninitialized variables or use of undefined values
// (analogous to null pointers) can be caught at compile time!
console.log(val1 + val2);

// Note: TypeScript also has 'null' which is similar to undefined. Sometimes the
// two are constrasted as:
//  - undefined: something that is missing or not yet assigned
//  - null: something explicitly assigned to have "no value"
// But honestly, it's not clear that these should be separate concepts, and in
// practice the fact that there are two causes a lot of confusion.
let nullable_str1: string | null = null;
let nullable_str2: string | null = "hello";

// BEST PRACTICE: Use undefined only and avoid null.
// However, it's possible you'll run into null in a 3rd-party library or API.


// ----------------------------------------------------------------------------
// The any Type
// ----------------------------------------------------------------------------
// The 'any' type is a special type that disables TypeScript's type checking.
// It allows a variable to hold any type of value without restriction.

let flexible: any = 42;
console.log(flexible);  // 42 (number)

flexible = "now I'm a string";
console.log(flexible);  // "now I'm a string" (string)

flexible = true;
console.log(flexible);  // true (boolean)

// While 'any' provides flexibility, it defeats the purpose of TypeScript's
// type safety. You lose all the benefits of type checking and autocompletion.
// BEST PRACTICE: Don't use 'any' unless absolutely necessary (and it almost never is).