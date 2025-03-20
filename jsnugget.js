try {
    console.log(age);
    //do sth
} catch (error) {
    // error.message = "sth broke"
    // handle th error
    // error message
    console.log(error.message);  
}

// optional chaining
const person= {
    name: "bob",
    age:76,
}
if (person.age) {
    console.log("hello");   
}
console.log(person?.job); // will not break code
console.log(person.job);
let error = {}

error?.firstName?.message

// nullish coalescence
const image = "car"
const whatsappAvatar = image ?? "Avatar image"
console.log(whatsappAvatar);


