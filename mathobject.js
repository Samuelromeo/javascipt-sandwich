// math object
// square root, pow, round, ceil, floor, trunc, random
console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(10 ** 2);
console.log(Math.round(-1.5));
console.log(Math.ceil(2.05));
console.log(Math.floor(3.9));
console.log(Math.trunc(11.99));

// Math.random - randoms btw 0-1
console.log(Math.random());
console.log(Math.trunc(Math.random() * 11));
console.log(Math.floor(Math.random() * 10 + 1));

const customers = ["Kelvin", "John", "Khalid", "David"]

const randomWinner = () => {
    let randomNumber = Math.floor(Math.random() * customers.length)
    return customers[randomNumber]
}
console.log(randomWinner());

//OTP generator

// min and max
console.log(Math.min(34, 4, 56, 9.7));
console.log(Math.max(34, 4, 56, 9.7));














