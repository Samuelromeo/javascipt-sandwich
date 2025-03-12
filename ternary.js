//ternary operators
// if else
// condition ? first action : second action

const myNumber = -50
myNumber > 0 ? console.log("POSITIVE") : console.log("NEGATIVE") ;

// use a ternary operator to check if a number is odd or even

const myNum = 40
myNum % 2 ===0 ? console.log("Even") : console.log("Odd") ;

// Mr Mario has a car
// Mr Mario does not have a car

const hasACar = false
const sentence = `Mr Mario ${hasACar ? "has" : "does not have"} a car`
console.log(sentence);

// declare a variable called isUserLoggedIn set it to either true or false
let isUserLoggedIn = false

// write a T O that logs welcome user if user is logged in and
// logout if the user is logged out
isUserLoggedIn ? console.log("Welcome User") : console.log("Log out");

// declare two variables balance and loanAmount set to any number value
const balance = 20000
const loanAmount = 4500

// using a TO tell a user if they eligible for a loan or not
// the loan eligibility criterion is that the amount of loan is 
// twice the balance or less

// 10 balance 20
loanAmount <= balance * 2
? console.log("Eligible for loan")
: console.log("Not eligible");

// declare two variables savings and transactionAmount
let savings = 500000
let transactionAmount = 100000

// write a TO that tells the user is the transaction will be
// successful or not

savings > transactionAmount
? console.log("Successful")
: console.log("Not Successful");

transactionAmount > 0
? console.log(`credit alert of ${transactionAmount}`)
: console.log(`debit alert`);

savings += transactionAmount;

console.log(savings);

//if credit add it to the savings amount if not substract it from the savings









