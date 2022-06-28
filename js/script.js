const user = document.querySelector(".user");
const scissors = document.querySelector(".btn-scissors");
const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");

const machine = document.querySelector(".machine");
let randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);

const arr = ["Rock", "Paper", "Scissors"];

function check() {
  if (user.textContent == machine.textContent) {
    document.querySelector(".check").textContent = "DRAW";
    document.querySelector(".check").style.color = "#252525";
  } else if (user.textContent == "Rock" && machine.textContent == "Paper") {
    document.querySelector(".check").textContent = "lose";
    document.querySelector(".check").style.color = "red";
  } else if (user.textContent == "Scissors" && machine.textContent == "Paper") {
    document.querySelector(".check").textContent = "Win";
    document.querySelector(".check").style.color = "#90EE90";
  } else if (user.textContent == "Paper" && machine.textContent == "Scissors") {
    document.querySelector(".check").textContent = "lose";
    document.querySelector(".check").style.color = "red";
  } else if (user.textContent == "Paper" && machine.textContent == "Rock") {
    document.querySelector(".check").textContent = "Win";
    document.querySelector(".check").style.color = "#90EE90";
  } else if (user.textContent == "Rock" && machine.textContent == "Scissors") {
    document.querySelector(".check").textContent = "Win";
    document.querySelector(".check").style.color = "#90EE90";
  } else if (user.textContent == "Scissors" && machine.textContent == "Rock") {
    document.querySelector(".check").textContent = "lose";
    document.querySelector(".check").style.color = "red";
  }
}

function rockBtn() {
  user.textContent = "Rock";
  machine.textContent = arr[randomNumber];
  randomNumber = Math.floor(Math.random() * 3);
  console.log(user.textContent == machine.textContent);
  check();
}

function paperBtn() {
  user.textContent = "Paper";
  machine.textContent = arr[randomNumber];
  randomNumber = Math.floor(Math.random() * 3);
  check();
}

function scissorsBtn() {
  user.textContent = "Scissors";
  machine.textContent = arr[randomNumber];
  randomNumber = Math.floor(Math.random() * 3);
  check();
}

rock.addEventListener("click", rockBtn);
paper.addEventListener("click", paperBtn);
scissors.addEventListener("click", scissorsBtn);
