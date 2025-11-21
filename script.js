let username;
let totalpoint = 0;
let rounds = 0;
let points = 0;
let curentdise;
let color = 34.3;
document.body.style.backgroundColor = `hsl(${color}, 10.3%, 73.3%)`;
const dices = document.getElementsByClassName("diceitems");
console.log(dices);

document.getElementById("startgame").addEventListener("keypress", function (i){

    if(i.key==="Enter"){
        i.preventDefault();
        startpage();
    }
});

function startpage() {
  username = document.getElementById("username").value;
  console.log(username);
  let pEl = document.createElement("p");
  document.querySelector(".status").appendChild(pEl);
 pEl.innerText = username;
  if (username.length > 0) {
    document.getElementsByClassName("startpage")[0].style.display = "none";
    document.getElementsByClassName("dashbord")[0].style.display = "block";
     document.getElementById("logo").style.display="none";
  } else {
    alert("please enter your name");
  }
}

const rollBtn = document.querySelector("#tryagain");
rollBtn.addEventListener("click", rollDice);

function rollDice() {
  let diceRoll = Math.floor(Math.random() * 6 ) + 1;
  if (curentdise) {
    curentdise.style.display = "none";
  }
  curentdise = dices[diceRoll - 1];
  curentdise.style.display = "block";
  points += diceRoll;

  if (diceRoll === 1) {
    points = 0;
    rounds++;
    document.getElementById("rounds").innerText = rounds;
  }
  document.getElementById("points").innerText = points;

  console.log(diceRoll);
}
const freez = document.querySelector("#freeze");
freez.addEventListener("click", freez1);

function freez1() {
  totalpoint += points;
  points = 0;
  rounds++;
  document.getElementById("points").innerText = points;
  document.getElementById("totalpoint").innerText = totalpoint;

  document.getElementById("rounds").innerText = rounds;

  if (totalpoint >= 100) {
    document.getElementById("win").style.display = "block";
    document.getElementById("win").innerText =
      username + " congrats! You’re the winner";
    document.getElementById("freeze").style.display = "none";
    document.getElementById("tryagain").style.display = "none";
    document.getElementById("resert").style.display = "block";
  }
}
const resert = document.querySelector("#resert");
resert.addEventListener("click", reset);

function reset() {
  points = 0;
  totalpoint = 0;
  rounds = 0;
  document.getElementById("win").style.display = "none";
  document.getElementById("freeze").style.display = "block";
  document.getElementById("tryagain").style.display = "block";
  document.getElementById("resert").style.display = "none";
  document.getElementById("points").innerText = points;
  document.getElementById("totalpoint").innerText = totalpoint;
  document.getElementById("rounds").innerText = rounds;
}
