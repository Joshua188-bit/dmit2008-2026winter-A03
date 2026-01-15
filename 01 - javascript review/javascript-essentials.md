
# JavaScript Essentials – Key Concepts Overview

---

## 1. Variables and Block Scoping

JavaScript has three ways to declare variables:

```js
var x = 10;    // function-scoped
let y = 20;    // block-scoped
const z = 30;  // block-scoped and immutable
```

Use `let` and `const` instead of `var` for modern, predictable behavior.

---

## 2. IIFE (Immediately Invoked Function Expression)

An IIFE runs as soon as it is defined:

```js
(function () {
  console.log("IIFE runs immediately!");
})();
```

Used to:
- Create isolated scopes
- Avoid polluting global variables
- can be used to execute await at the top level of a script, especially when you're outside an async function — like in a module or script file.

---

## 3. Functions

```js
//Function Declaration:

function greet(name) { return 'Hello ' + name; }
 
//Function Expression:
const greet = function(name) { return 'Hello ' + name; }; 

//Arrow Function:
const greet = (name) =>{
    'Hello ' + name; 
}

```

Functions are reusable blocks of logic.

---

## 4. If / Else / Switch / Loops

### If / Else
```js
if (x > 10) {
  console.log("Big number");
} else {
  console.log("Small number");
}
```

### Switch
```js
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown");
}
```

### Loops
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (x < 10) {
  x++;
}
```

---

## 5. DOM API

The **Document Object Model** allows you to interact with HTML:
### Selecting
```js
document.getElementById("header");
document.getElementsByClassName("card");
document.getElementsByTagName("li");

document.querySelector(".card");         // first match
document.querySelectorAll(".card");      // all matches
```
### Modifying Content and Attributes
```js
const el = document.getElementById("title");

el.textContent = "New Title"; // sets text inside the element
el.innerHTML = "<strong>Hello</strong>"; // can insert HTML

el.setAttribute("class", "highlight");  // set attribute
el.getAttribute("class");               // get attribute
el.removeAttribute("class");           // remove attribute

```
### Changing Style
```js
element.style.color = "red";
element.style.fontSize = "24px"; //use Css propert but in camelCase

Object.assign(element.style, {   //element.style is a special DOM object, you can add more functionalities by Mixin
  backgroundColor: 'lightgray',
  padding: '10px',
  borderRadius: '8px'
});
//by class
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("expanded");

```
### Creating, Inserting and Removing Elements
```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv); // adds to the end of body

// Insert before another element
const container = document.querySelector(".container");
container.insertBefore(newDiv, container.firstChild);

//Remove
const item = document.querySelector(".item");
item.remove(); // modern approach
```

---

## 6. Events

You can listen to user interactions:

```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked");
});
```
```html
<button onclick="myFunction()"> Click me</button>
```

---

## 7. Arrays and Array Methods

### Declaration
```js
const numbers = [1, 2, 3, 4];
```

### Common Methods
```js
numbers.push(5);
numbers.pop();
// forEach
numbers.forEach(n => console.log(n));

// map
const squared = numbers.map(n => n * n);

// filter
const evens = numbers.filter(n => n % 2 === 0);

// reduce
const sum = numbers.reduce((total, n) => total + n, 0);

// find
const three = numbers.find(n => n === 3);

```

---

## 8. Objects and Destructuring

### Object
```js
const user = {
  name: "Alice",
  age: 25,
  greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
};
```

### Destructuring
```js
const { name, age } = user;
```

---

## 9. Spread and Rest Operators

### Spread
```js
const arr = [1, 2];
const newArr = [...arr, 3, 4];
```

```js
const obj = { a: 1 };
const newObj = { ...obj, b: 2 };
```

### Rest
```js
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
```

---

## 10. Try/Catch Error Handling

```js
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Something went wrong:", error.message);
}

//other example
function divide(a, b) { 
   if (b === 0)  throw new Error("Cannot divide by zero");
return a / b; 
} 

try { 
   console.log(divide(5, 0));
} catch (e) { 
   console.log("Handled:", e.message); 
}

```

Used to handle runtime errors gracefully.

---


