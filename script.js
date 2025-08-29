// =====================
// Part 1: Basics
// =====================
function checkAge() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").innerText = "❌ You are a minor.";
  }
}

// =====================
// Part 2: Functions
// =====================

// Function to calculate total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").innerText = `Total is: ${total}`;
}

// Function to toggle content
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// =====================
// Part 3: Loops
// =====================

// Countdown using for loop
function countdown(num) {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";
  for (let i = num; i >= 0; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// List fruits using forEach loop
function listFruits() {
  let fruits = [" Apple", " Banana", " Grapes", " Pineapple"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.innerText = fruit;
    list.appendChild(li);
  });
}

// =====================
// Part 4: DOM Manipulation
// =====================
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

document.getElementById("addElementBtn").addEventListener("click", () => {
  let box = document.getElementById("dynamicBox");
  let p = document.createElement("p");
  p.innerText = " New content added dynamically!";
  box.appendChild(p);
});
