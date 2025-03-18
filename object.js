// OBJECT - {key: value, key2: value2}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMarried: true,
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "Lagos",
    zip: 10011,
    geoLocation: {
      lat: 23.46,
      lng: 45.78,
    },
  },
};

// getting propertiesnfrom an object
// dot notation objName.propertyName and basket notation objname ['propertyname']
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName.toUpperCase());
console.log(person["age"]);
console.log(person["friends"]);

console.log(
  `i live at ${person.location.street} estate, ${person["location"]["area"]}`
);

//adding a new property to an object
// workplace
person.workPlace = "Appolo Schools";
person.location.landmark = "City Mall";
console.log(person);

// removing property delete
delete person.job;
console.log(person);

// add a new property to the location object in the person object called landmark set to
// city mall

const user = {
  username: "ade001",
  email: "ade@google.com",
  profilePic: "image",
  age: 25,
  isLoggedIn: false,
  isVerified: true,
  posts: ["Nigeria just get as e be", "i love food"],
  welcomeUser: function () {
    return this.isLoggedIn ? `Welcome ${this.username}` : "Log in to Continue";
  },
  verifyUser: function () {
    return this.isVerified
      ? "Verification Successful"
      : "Verify your account to continue";
  },
};

// object methods - developer writes the functons
// function declaration (this - refers to the object itself)
// that user welcome username or log in to continue
console.log(user.welcomeUser());
console.log(user.verifyUser());

//delacre an object called book with title property
const book = {
  title: "Obi goes to school",
  author: "Samuel Romeo",
  yearPublished: "2002",
  rating: 4,
  similarAuthor: ["Mark Wells"],
  price: "$30",
  genre: "comedy",

  description: function () {
    return `the book titled ${this.title} cost ${this.price} and it is a ${this.genre} novel`;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? "This book is recommended" : "Not recommended"
  }
};
console.log(book.description());
console.log(book.recommendBook());

const transaction = {
    amount: 4000,
    date: "16/03/2025",
    charges: 25,
    refNum: "tranx-1257662673763"
}
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

//object destructuring

// rest and spread operator

const match = {
    teamA : "Wolfsburg",
    teamB : "Lecce",
    teamAScore: 3,
    teamBScore: 2,
    duration: 96,
    corners: 12,
    numOfSubsUsed: 7,
    fouls: 14,
    stadium: "Wembley",
    weather: "Snowy",

    outcomeOfMatch: function () {
   if (this.teamAScore > this.teamBScore) {return `${this.teamA} won with a score of ${this.teamAScore}`
   }else if (this.teamAScore < this.teamBScore) {
    return `${this.teamB} won with${this.teamBScore};
    } else {
      return It is a draw;
    }`
   }
    },

    overviewOfMatch: function () {
        return `the match between ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`
    }
}

console.log(match.ou());
console.log(match.overviewOfMatch());

const { teamA, fouls, stadium, corners } = match
console.log(fouls, stadium, corners);

const property = {
    name: "Exquisite Villa",
    rent: "2.3M/year",
    bedrooms: 7,
    bathroom: 10,
    cautionFee: 5000,
    legalFee: 4000,
    facilities: ["pool", "sauna", "theatre", "gym"],
    location: {
        area: "Gbagada",
        city: "Lagos",
        num: 45,
        street: "Charly Boy",
        geo: {
            lat: 100.27,
            lng: 45.78,
        }
    }
}

const {
    name,
    rent,
    location: { street, city, geo:{lng}}
} = property

const product = {
    price: 9.99,
    discount: 7.12,
}

const { price, discount} = product
let newPrice = price - (discount / 100) * price
console.log(newPrice.toFixed(2));








