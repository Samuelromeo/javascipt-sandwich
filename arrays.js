// [element, element2, element3]
// arrays usually contains the datatypes
// empty arrays are falsy value
const students = [ "David", "Quadri", "Isaac", "Johnpaul", "Uju", "Uju", "Samuel"]
// arrays properties - length
console.log(students);
console.log(students.length);
// getting elements from an array, position
console.log(students[0]);
console.log(students[2]);
// change elements in an array, position
students[0] = "Azeez"
console.log(students);
students[3] = "Samuel"
console.log[students.length -1] = "John Doe";
console.log(students);

// array methods
// add and remove elements from an array (front and back)
// structured data type stack LIFO
// push, unshift (add elements to an)
students.push("Micheal")
students.push("Juwon")
students.unshift("Uthman")

//pop and shift
students.pop()
students.shift()
console.log(students);

// includes
console.log(students.includes("David"));

//indexOf lastIndexOf
console.log(students);
console.log(students.indexOf("Uju"));
console.log(students.lastIndexOf("Uju"));
console.log(students.at(2));

// extract portions an array slice(start, end(non-inclusive))
console.log(students.slice(0, 3));
console.log(students.slice(4, 7));

// methods to convert arrays to strings
// join, toString
console.log(students.join("-"));
console.log(students.toString());

// iterator methods
// higher order methods(functions)-
// it needs another function as parameter
// forEach, map, find, filter, some, every, reduce
// forEach - executes a function for every element in an array
students.forEach((student)=>{console.log(student.toUpperCase());
})

//give me the first letter of every student name in the students array
students.forEach((student)=>{console.log(student.charAt(0));
})

// map - create a new array with the result of a function

const smallCaseStudents = students.map((student)=>{return student.toLowerCase()})
console.log(smallCaseStudents);

// filter - create a ne array with elements that pass a test(search condition)

const myNums = [3, 5, 6, 8, 10, 1, 4, 2]
// > 5

const greaterThan5 = myNums.filter((num) => {return num > 5})
console.log(greaterThan5);

const evenNumbers = myNums.filter((num) => {return num % 2 === 0})
console.log(evenNumbers);

const oddNumbers = myNums.filter((num) => {return num % 2 !== 0})
console.log(oddNumbers);

const lengthGreaterthan6 = students.filter((student) =>  student.length > 6)
console.log(lengthGreaterthan6);

// find returns the FIRST element that passes a test (search condition)

const findgreaterthan6 = myNums.find((num) => num > 5)
console.log(findgreaterthan6);

const favStudent = students.find ((student) => student.length === 5)
console.log(favStudent);

// some - returns true if at least one of every element passes a test
const ifSomeGreater5 = myNums.some ((num) => num > 5)
console.log(ifSomeGreater5);

// every - returns true if all element passes the test
const ifallGreater5 = myNums.every((num) => num > 5)
console.log(ifallGreater5);

//reverse, sort, concat, reduce

const carBrands = ["Toyota", "Rollsroyce", "Ferrari", "Telsa", "BMW"]
console.log(carBrands);

// console.log (carBrands.reverse)
console.log(carBrands.sort());
console.log(carBrands.sort().reverse());

//sorting numbers 0 - up up - 0
const prices = [200, 4000, 650, 100, 3500]
console.log(prices.sort());
console.log(prices.sort((a,b) => a - b)); //smallest to largest
console.log(prices.sort((a, b) => b - a)); // high to low

//reduce = reduces every element in an array to a single value
// two parameters, cb function, start point
const totalPrice = prices.reduce((acc, curr) => {return acc + curr}, 0)
console.log(totalPrice);


// concat
const africaCountries = ["Togo", "Egypt"]
const asainCountries = ["Singapore", "Japan", "South Korea"]

const holidayLocations = africaCountries. concat(asainCountries)
console.log(holidayLocations);

const fruit = "banana"
//split method on a string
console.log(fruit.split(""));
console.log(fruit.split("a"));

// write a function that reverse the
// cat -- tac gel - leg
const reverseWord = (word) => {return word.split("").reverse("")}
console.log(reverseWord("cat"));
console.log(reverseWord("gel"));

// palindrome - words that are spelt the same
// madam level tat noon pap eye

function ispalindrome (word) {
    // default to a standard (lowercase, uppercase)
    return word.toLowerCase() === word.split("").reverse(). join("").toLowerCase
}

console.log(ispalindrome("Madam"));

//SET - unique values in an array
const users = ["John", "Dave", "Nate", "John", "Dave"]
console.log(new Set(users));
































