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

//write a program that tells the charges of transaction
//any tranaction that is

const transactionAmount = 6800
if (transactionAmount > 2500) {console.log("Your charges is 100");
}else {console.log("Your charge is 50");
}

//write a program that displays if a word has
// vowel sounds (a e i o u) in it
// and displays consonant if not


const scoreA = 100
const scoreB = 100
// draw a wins b wins
// else if statement more than 2 choices

if (scoreA > scoreB) {console.log("A wins");
}else if (scoreB > scoreA) {console.log("B wins");
}else {console.log("it is a draw");
}

// write a program that rates movies
// above 8 is excellent
// above 6 is good
// above 5 is average
// else is bad

const movieRating = 6.5
if (movieRating >= 8) {console.log("Excellent Movie");
}else if (movieRating >= 6) {console.log("Good Movie");
}else if (movieRating >= 5) {console.log("Average Movie");
}else {console.log("Bad Movie");
}

// less than 18 - young club
// 18 - 60 - adult club
// above 60 - old people club

const userAge = 45
if (userAge > 60) {console.log("Old Peoples club");
}else if (userAge < 18) {console.log("Young club");
}else {console.log("Adult club");
}

const grade = "p"

switch (grade) {
    case "A":
    case 'a':
    console.log("EXCELLENT");
    break;
    case "B":
    case "b":
    console.log("VERY GOOD");
    break;
    case "C":
    case "c":
    console.log("GOOD");
    break;
    case "D":
    case "d":
    console.log("FAIR");
    break;
    case "E":
    case "e":
    console.log("PASS");
    break;
    case "F":
    case "f":
    console.log("FAIL");
    break;

    default:
        console.log("Invalid grade");
        
}