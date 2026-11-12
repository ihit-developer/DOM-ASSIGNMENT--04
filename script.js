// Task 1: Add a Class
const paragraph = document.getElementById("para");
const btn = document.getElementById("btn");

btn.onclick = function () {
  paragraph.classList.add("highlight");
};

// Task 2: Remove a Class
const btn2 = document.getElementById("btn2");
btn2.onclick = function () {
  paragraph.classList.remove("highlight");
};

// Task 3: Toggle a Class
const btn3 = document.getElementById("btn3");
btn3.onclick = function () {
  paragraph.classList.toggle("highlight");
};

// Task 4: Check Class Exists
const btn4 = document.getElementById("btn4");
btn4.onclick = function () {
  const hasHighlight = paragraph.classList.contains("highlight");
  alert(hasHighlight ? "Highlight is present" : "Highlight is not present");
};

// Task 5: Button Active State (Real World)
const btn5 = document.getElementById("btn5");
btn5.onclick = function () {
  btn5.classList.toggle("active-btn");
};

// Task 6: Dark Mode (Industry Example)
const btn6 = document.getElementById("btn6");
btn6.onclick = function () {
  document.body.classList.toggle("dark-mode");
};
