const turnCount = document.getElementsByClassName("turn-count-number");
const turnPlus = document.getElementsByClassName("turn-plus");
const turnMinus = document.getElementsByClassName("turn-minus");

const encounterCount = document.getElementsByClassName("encounter-count-number");
const encounterPlus = document.getElementsByClassName("encounter-plus");
const encounterMinus = document.getElementsByClassName("encounter-minus");

let turnCountAmount = 0;
let encounterCountAmount = 0;

turnPlus.addEventListener(onclick, addCounter(turnCount, turnCountAmount, 1));
turnMinus.addEventListener(onclick, addCounter(turnCount, turnCountAmount, -1));

encounterPlus.addEventListener(onclick, addCounter(encounterCount, 1));
encounterMinus.addEventListener(onclick, addCounter(encounterCount, encounterCountAmount, -1));

function addCounter(counter,lastAmount, newAmount) {
    counter.innerHTML = lastAmount + newAmount;
}