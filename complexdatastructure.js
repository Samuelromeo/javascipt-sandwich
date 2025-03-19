const customers = ["Ade", "Ngozi"];
customers.map((customer) => {
  console.log(customer.charAt(0));
});

//[object1, object2]
// name, age, gender, location, purchase

const myCustomers = [
  {
    name: "Kung Lao",
    age: 25,
    gender: "M",
    location: "Ibadan",
    purchase: 6000,
  },
  {
    name: "Johnny Cage",
    age: 30,
    gender: "M",
    location: "Lagos",
    purchase: 4000,
  },
  {
    name: "Liu Kang",
    age: 22,
    gender: "M",
    location: "Ibadan",
    purchase: 8000,
  },
  {
    name: "Sonya Blade",
    age: 20,
    gender: "F",
    location: "Lagos",
    purchase: 7000,
  },
  { name: "Kitana", age: 32, gender: "F", location: "Ondo", purchase: 5500 },
];

myCustomers[1].name;
const { name } = myCustomers;
myCustomers[1]["name"];

myCustomers.map((customer) => {
  console.log(customer.name);
});

//get customers that are 25 and above
const olderCustomers = myCustomers.filter((customer) => customer.age >= 25);
console.log(olderCustomers);

const youngCustomers = myCustomers.filter((customer) => customer.age < 25);
console.log(youngCustomers);

const femaleCustomers = myCustomers.filter(
  (customer) => customer.gender.toUpperCase() === "f".toUpperCase()
);
console.log(femaleCustomers);

const maleCustomers = myCustomers.filter(
  (customer) => customer.gender.toUpperCase() === "m".toUpperCase()
);
console.log(maleCustomers);

// get the number of customers staying in lagos

const lagosCustomers = myCustomers.filter(
  (customer) => customer.location === "Lagos"
);
console.log(lagosCustomers.length);

const customerAge = myCustomers.sort((a, b) => a.age - b.age);
console.log(customerAge);

//get the average age of the customers
const totalAge = myCustomers.reduce((acc, customer) => acc + customer.age, 0);
const avAge = totalAge / myCustomers.length;
console.log(avAge);

// get me a customer staying in ibadan
const ibCustomers = myCustomers.find(
  (customer) => customer.location === "Ibadan"
);
console.log(ibCustomers);

//get all customers with a mininum of 6000 purchase amount
const puCustomers = myCustomers.filter((customer) => customer.purchase >= 6000);
console.log(puCustomers);

// get the total purchase amount for all customers in ibadan
const ibdCustomers = myCustomers
  .filter((customer) => customer.location === "Ibadan")
  .reduce((acc, customer) => acc + customer.purchase, 0);
  console.log(ibdCustomers);
  

// get a new array containing all the purchases of all customers map
const allCustomer = myCustomers.map((customer) => customer.purchase);
console.log(allCustomer);

// get the total purchase amount of all customers
const purCustomer = myCustomers.reduce(
  (acc, customer) => acc + customer.purchase,
  0
);
console.log(purCustomer);

// get the average purchase for the last three customer
const lastThreeCustomer = myCustomers
  .slice(2)
  .reduce((acc, customer) => acc + customer.purchase, 0);
console.log(lastThreeCustomer / 3);

const shoppingCart = [
  { title: "Jean", price: 100, qty: 2 },
  { title: "Hat", price: 50, qty: 4 },
  { title: "Cream", price: 30, qty: 1 },
  { title: "Duffel Bag", price: 150, qty: 5 },
  { title: "Balaclava", price: 70, qty: 3 },
];

shoppingCart.map((item) => {console.log(`${item.title} costs $${item.price}`);
})

const highProducts = shoppingCart.filter((item) => item.price > 70)

// get the total amount spent on each item
// jeans will cost 200

shoppingCart.map((item) => {
    console.log(`${item.title} costs $${item.price * item.qty}`);
    
})

// get the totalCost of all items in the cart

const totalValue = shoppingCart.reduce((acc, item) => acc + item.price * item.qty, 0)
console.log("Total cost is " + totalValue);

