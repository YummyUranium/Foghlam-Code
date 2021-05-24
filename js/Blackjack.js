// BUILDING THE DECK

// Declares arrays for card values
const deck = [];

// Adds 52 numbers to deck array
for (var i = 1; i < 53; i++) {

    // Adds "Hearts" after the first 13 numbers
    if (i < 14) {
        if (i === 1) {
            deck[i] = "Ace of Hearts";
        } else if (i === 11) {
            deck[i] = "Jack of Hearts";
        } else if (i === 12) {
            deck[i] = "Queen of Hearts";
        } else if (i === 13) {
            deck[i] = "King of Hearts";
        } else {
            deck[i] = i + " of Hearts";
        }
    }
    // Adds "Diamonds" after the next 13 numbers
    else if (i > 13 && i < 27) {
        var j = i - 13;
        if (j === 1) {
            deck[i] = "Ace of Diamonds";
        } else if (j === 11) {
            deck[i] = "Jack of Diamonds";
        } else if (j === 12) {
            deck[i] = "Queen of Diamonds";
        } else if (j === 13) {
            deck[i] = "King of Diamonds";
        } else {
            deck[i] = j + " of Diamonds";
        }
    }
    // Adds "Clubs" after the next 13 numbers
    else if (i > 26 && i < 40) {
        var k = i - 26;
        if (k === 1) {
            deck[i] = "Ace of Clubs";
        } else if (k === 11) {
            deck[i] = "Jack of Clubs";
        } else if (k === 12) {
            deck[i] = "Queen of Clubs";
        } else if (k === 13) {
            deck[i] = "King of Clubs";
        } else {
            deck[i] = k + " of Clubs";
        }
    }
    // Adds "Spades" after the next 13 numbers
    else {
        var l = i - 39;
        if (l === 1) {
            deck[i] = "Ace of Spades";
        } else if (l === 11) {
            deck[i] = "Jack of Spades";
        } else if (l === 12) {
            deck[i] = "Queen of Spades";
        } else if (l === 13) {
            deck[i] = "King of Spades";
        } else {
            deck[i] = l + " of Spades";
        }
    }

    deck.push(i);

}

// This is to remove first and last elements, the first
// of which is empty and the second is 52, I don't know
// why they exist but I can't be bothered to figure out
// and this is a quick and easy fix.
deck.pop();
deck.shift();

// VARIABLES

// Creates users hand
var userCard1 = deck.splice(randArrayElem(deck), 1)[0];
var userCard2 = deck.splice(randArrayElem(deck), 1)[0];
var userHand = userCard1 + ", " + userCard2;

// Creates dealers hand
var dealerCard1 = deck.splice(randArrayElem(deck), 1)[0];
var dealerCard2 = deck.splice(randArrayElem(deck), 1)[0];
var dealerHand = dealerCard1 + ", " + dealerCard2;

// FUNCTIONS

// Print to <p> with id being id of html element you want to print to
function print(id, str) {
    document.getElementById(id).innerHTML = str;
}

// Function for getting a random element from an array
function randArrayElem(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function for making buttons when it's your turn
function userTurn() {
    let hitButton = document.createElement("button");
    hitButton.innerHTML = "Hit";
    document.getElementById("display").appendChild(hitButton);

    let stickButton = document.createElement("button");
    stickButton.innerHTML = "Stick";
    document.getElementById("display").appendChild(stickButton);
}

// BUILDING THE GAME

// Displayed at start of game
print("welcome", "Welcome to Blackjack!");

// Displayed first round
print("display", "The dealer shuffles the deck and deals two cards to you. Your cards are: " + userCard1 + " and " + userCard2 + ". The dealer deals two cards to themselves, one of which is shown to you: " + dealerCard1 + ".\nWhat do you do?");

// Creates buttons for user's turn
userTurn();