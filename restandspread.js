// REST AND SPREAD OBJECT
// ...
const user = {
    name: "John Carter",
    age: 90,
    gender: "male"
}
// unstructured data type
const { ...prop} = user
console.log(prop);


// rest operator
const arr = [3, 4, 6, 8]
// structured
const [...others] = arr
console.log(others);

const countries = ["Togo", "Cameroon", "Gabon", "Ghana", "Guinea"]
const [x, ...rest] = countries

const product = {
    title: "Micheal Kros",
    price: 300,
    image: image,
}
const {price, ...property} = product

// spread operator

const deatailedProduct = {
    stock: 6,
    color: "red",
    category: "bag",
    weight: 13,
    ...product,
}
console.log(deatailedProduct);

const onlineStudents = ["Kelvin", "Jay", "Osas"]
const physicalStudents = ["John", "luke", "mark"]

const allStudents = [...onlineStudents, ...physicalStudents, "Rudd", "Seyi"]
console.log(allStudents);

