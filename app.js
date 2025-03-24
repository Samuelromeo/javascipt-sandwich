// document object model (dom)

// select element on the document, tagName (h1, p), className, idName
// combinations

const headings = document.getElementsByTagName("h1")
console.log(headings);

const myH1s = document.getElementsByClassName("heading")
console.log(myH1s);

const textPara = document.getElementById("text")
console.log(textPara);

//querySlector(css selector) one
// ., #, div p, div. inner
const firstPara = document.querySelector("p")
console.log(firstPara);

const allParas = document.querySelectorAll("p")
console.log(allParas);

// interacting with the contents on the doc
// textContent, innerText, innerHTML

const heading = document.querySelector(".heading")
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += "JS IS FUN"

const container = document.querySelector("div")
console.log(container.innerHTML);
container.innerHTML += "<a href='https:google.com'> visit google </a>"

const myName = "Azzez Thiago"
const initials = "A.T"
const intro = document.querySelector("h2")
intro.textContent = `Welcome ${myName}`
// welcome initials

// interact with attributes
const mylink = document.querySelector(".mylink")

// facebook
mylink.textContent = "Facebook"
mylink.setAttribute("href","https://facebook.com")
mylink.setAttribute("target", "_blank ") 
mylink.getAttribute("href")
console.log(mylink.getAttribute("href"));

// interact with styles
mylink.style.color = "red"
mylink.style.textDecoration = "none"

const btn = document.querySelector("button")

// btn.className = "mybtn"
// classList
btn.classList.add("mybtn")
// btn.classList.remove("kevin")

//create element in js

const section = document.createElement("section")
section.innerHTML = "<h1>Created from JS<h1>";
section.className = "mysection"

// append it body or wherever it is neeeded
const body = document.querySelector("body")

body.appendChild(section)

// responding to users interaction
// 1. event e.g click, submit 2. event handler, function
const testbtn = document.querySelector(".testbtn")

testbtn.addEventListener("click", () => {
    console.log("User clicked");
    body.style.backgroundColor ="red" 
})

//form handling
// submit
// click

const form = document.querySelector("form")
const fullname = document.querySelector("fullname")
const small = document.querySelector("form small")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullNameValue = fullname.ariaValueMax.trim()
    console.log("form submitted", fullNameValue);  
})

// validate the input
if (fullNameValue === "") {
    small.style.display = "block"
    small.textContent = "Please provide a name"
}



