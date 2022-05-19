const input = document.getElementById("space-game-input");
const gameText = document.getElementById("story-text");

window.onload() = function() {
    input.focus();
}

// Declaring variables
const gameCommands = ["open", "look", "attack", "talk", "roll"]

let userTraits = {
    strength = 10,
    dexterity = 10,
    constitution = 10,
    charisma = 10,
    intelligence = 10
}

// For creating Rooms - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Room {
    constructor(env) {
        
    }
}

function increaseTrait(trait, amount) {
    userTraits.trait += amount;
}

