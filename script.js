let mainContainer = document.getElementById("main-container");
let ul = document.getElementById("ul");
let title = document.querySelector("h1");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let para = document.querySelector("p");
let span = para.firstChild;

for (let i = 0; i < 5; i++) {
  let li = document.createElement("li");
  li.textContent = `${i}`;
  ul.appendChild(li);
}

b1.addEventListener("click", () => {
  handleButton();
});

function handleButton() {
  b1.classList.add("clicked");
  b1.textContent = "Thanks for clicking me!";
}

b2.addEventListener("click", () => {
  killButton();
});

function killButton() {
  b2.disabled = true;
}
