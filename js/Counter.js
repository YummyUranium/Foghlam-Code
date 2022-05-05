const pokeCount = document.getElementsByClassName("poke-count-number");
const pokePlus = document.getElementsByClassName("plus");
const pokeMinus = document.getElementsByClassName("minus");

let pokeCountAmount = 0;

pokePlus.addEventListener(onclick, addCounter(pokeCount, 1));
pokeMinus.addEventListener(onclick, addCounter(pokeCount, -1));

function addCounter(counter, amount) {
    counter.innerHTML = pokeCountAmount + amount;
}