let score = 1;
let outputDiv = document.getElementsByClassName("output");
let scoreNum = document.createTextNode("Score : 0");
outputDiv[0].appendChild(scoreNum);

let div = document.getElementsByClassName("moles");
let randomMoles = 0;

function displayMoles() {
  randMoles();
  const nextCall = Math.floor(Math.random() * 2000);
  colorMoles(nextCall);
  setTimeout(displayMoles, nextCall);
}

function randMoles() {
  const randNum = Math.floor(Math.random() * div.length);
  randomMoles = randNum;
}

function colorMoles(nextCall) {
  div[randomMoles].style.background = "red";
  setTimeout(function () {
    clearMoles();
  }, nextCall);
}

function clearMoles() {
  div[randomMoles].style.background = "wheat";
}

function clickOnMoles(event) {
  if (event === div[randomMoles]) {
    console.log("click");
    scoreNum.textContent = "Score : " + score++;
  } else {
    console.log("not a mole");
  }
}

for (Element of div) {
  Element.addEventListener("click", (event) => {
    clickOnMoles(event.target);
  });
}

displayMoles();
