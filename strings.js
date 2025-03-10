//STRINGS - character inside of quoation marks
const firstName = "John"
const lastName = "Doe"
const myPassword = "futfuft"

//STRINGS PROPERTIES - length
console.log(firstName.length);
console.log(lastName.length);
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName
console.log(fullName)

//log the length of the full name of console
console.log(fullName.length);

//strings methods-  built in functions that can be done on strings
const email ="jjdoe@google.co.uk"
console.log(email);
//toUpperCase, toLowerCase
console.log(email.toLowerCase());
console.log(email.toUpperCase());


//indexOf, lastIndex, charAt
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

//startsWith true or false, endsWith, includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.includes("doe"));
console.log(email.toUpperCase().includes(".CO"));

//trim, trimStart and trimEnd (removes white spaces)
const username = "   ade001   ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

//replace replaceAll

//01******90
const myName = "jane doe"
console.log(myName.replace("jane", "peter"));
console.log(myName.replaceAll("e", "*"));

//extract portions of a string slice substrings (start, end) substr
console.log(myName.slice(0, 3));
console.log(myName.substring(0, 3));

//substr (start, num of characters)
console.log(myName.substr(0, 2));
const accountNumber = "3245686543"
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));
console.log(accountNumber.replace(accountNumber.slice(2, 8), "******"));

const userName = "johnpaul"
console.log("welcome" + " " + userName.toUpperCase);

// concatention
const author = "Jax Draxx"
const book = "The Ghost"
// Jax Draxx wrote the book the ghost
const sentence = author + " wrote the book " + book
console.log(sentence);

//template literals used to format variables inside of a string
//``
const sentence2 = `${author} wrote the book ${book.toLowerCase()}`
console.log(sentence2);

const person = "Adam Sandler"
const movie = "Romance Scam"

const sentence3 = `${person.toUpperCase()} featured in a movie ${movie}`;
console.log(sentence3);

const fName = `${firstName} ${lastName}`
































