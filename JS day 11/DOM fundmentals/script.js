// Selectors
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");
console.log("First item:", firstItem.textContent);
allItems.forEach(el => console.log("All items:", el.textContent));

// Creating & inserting elements
const fruitsArray = ["Mango", "Orange", "Pineapple"];
const dynamicFruits = document.getElementById("dynamicFruits");
fruitsArray.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  dynamicFruits.appendChild(li);
});

// innerHTML vs textContent
const htmlVsText = document.getElementById("htmlVsText");
htmlVsText.textContent = "<b>Bold Text</b>"; // plain text
htmlVsText.innerHTML = "<b>Bold Text</b>";  // rendered bold

// Attributes, classList, styles, dataset
const demoImg = document.getElementById("demoImg");
demoImg.setAttribute("src", "Program.png");
console.log("Alt text:", demoImg.getAttribute("alt"));

const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

const demoText = document.getElementById("demoText");
demoText.style.color = "blue";
demoText.style.fontSize = "18px";

const datasetList = document.getElementById("datasetList");
datasetList.querySelectorAll("li").forEach(li => {
  console.log(li.dataset.id, li.dataset.category);
});
