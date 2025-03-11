// conditional statement
// if statement
//if (condition true){
// lines of code //}

if (true) {
    console.log("Hello World");
    
}

// 18+ // YOU ARE ELIGIBLE TO VOTE
const age = 12

if (age >= 18) {
    console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "dhhgbudgy"
if (password.length >=9) {
    console.log("password is strong");
}

if (password.length >=9) {
    console.log("password is strong");
}else{
    console.log("password is weak");   
}

if (false) {
    console.log("hello class");
}else{console.log("goodbye class");
}

const balance = 200000
const amount = 300000
if (200000 <= 3000000) {
    console.log("transcation successful");  
}else{console.log("insufficient funds");
}

const userPin = 1234
const enteredPin = 2134
if (userPin === enteredPin) {console.log("correct pin");
}else {console.log("incorrect pin");
}

const email = "sinlep"
if (email.includes("@")) {console.log("valid email");
}else {console.log("invalid email");
}

const score = 67
if (score >= 50) {
    console.log("pass exam");   
}else {console.log("failed the exam");
}

let myNum = 89
if (myNum > 0) {console.log("positive");
}else {console.log("negative");
}

//write a program that determines the greater of two numbers //(num1 num2)
let num1 = 90
let num2 = 98
if(num1 > num2) {console.log(`num1 ${num1} is greater than num2 ${num2}`);
}else{ console.log(`num2 ${num2} is greater than num1 ${num1}`);
}

//write a program that checks if a number is even or odd
let num3 = 56
if (num3 % 2 === 0) {console.log(`${num3} is Even`);
}else{console.log(`${num3} is Odd`);
}

// write a program that checks if a user is eligible for a discount
//a user is eligible for a discount
// if the purchaseAmount is more thank 100 dollars
const purchaseAmount = 600
if (purchaseAmount > 100) {console.log("You have a dsicount");
}else{console.log("Buy more");
}

// two teams teamA and teamB competed in a spot
// team a scored 54, 56, 78
// team b scored 67, 60, 82

// calculate the average score of both teams
const teamA = (54 + 56 + 78) / 3
const teamB = (67 + 60 + 82) / 3
// log a statement that looks like this
// Team a has an average score of 100
console.log(`Team A has an average score of ${averageA}`);
console.log(`Team B has an average score of ${averageB}`);

//write a program now to determine the winner of the competition
// if A wins log Team A wins else Team B wins
if (averageA > averageB) {console.log("Team A wins");
}else{console.log("Team B wins");
}

//write a program that tells if a student should be in class
// or at home, the program uses a 24 hour clock 00-24
// the student should be in class between the hours of 10 and 16

let timeOfDay = 13
if (timeOfDay > 10 && timeOfDay < 16) {console.log("You should be in class");
}else{console.log("Be at home");
}