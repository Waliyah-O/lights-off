const title = document.getElementById("title");
const container = document.querySelector("#container");
const paragraphs = document.getElementsByClassName("paragraphs");
const allTheDivs = document.querySelectorAll(".thisIsADiv");
const list = document.getElementsByTagName("ol")[0];
const image = document.getElementsByTagName("img");
const firstDiv = document.getElementById("firstDiv");
const secondDiv = document.getElementById("secondDiv");
const thirdDiv = document.getElementById("thirdDiv");
const addBtn = document.getElementById("add");
const textBox = document.getElementById("textBox");
const clearBtn = document.getElementById("clear-button");
const changeBtn = document.getElementById("changeStyle-button");

title.innerHTML += " Change Title";
let newItem = "";
let newImg = "";

let inputChange = () => {
  newItem = textBox.value;
  console.log(newItem);
};
let changeStyle = () => {
  container.style.backgroundColor = "hsl(60, 33%, 30%)";
  container.style.height = "100vh";
  firstDiv.style.backgroundColor = "grey";
  secondDiv.style.backgroundColor = "red";
};

let addItem = () => {
  let newElement = document.createElement("li");
  newElement.innerHTML = newItem;
  list.appendChild(newElement);
  textBox.value = "";
};

let clearItem = () => {
  textBox.value = "";
};

changeBtn.addEventListener("click", changeStyle);
textBox.addEventListener("change", inputChange);
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearItem);
// window.onload = changeStyle;
