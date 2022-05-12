const input = document.getElementById("space-game-input");
const gameText = document.getElementById("story-text");

window.onload() = function() {
    input.focus();
}

const gameCommands = ["open", "look", "attack", "talk", "roll"]

let userTraits = {
    strength = 10,
    dexterity = 10,
    constitution = 10,
    charisma = 10,
    intelligence = 10,
    alignment = 5
}