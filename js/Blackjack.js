// BUILDING THE DECK

// Declares arrays for card values
var intDeck = [];
var strDeck = [];

// Adds 52 numbers to both deck arrays, renames strDeck numbers to strings
for (var i = 1; i < 53; i++) {

    intDeck.push(i);

    // Adds "Hearts" after the first 13 numbers
    if (i < 14) {
        if (i === 1) {
            strDeck[i] = "Ace of Hearts";
        } else if (i === 11) {
            strDeck[i] = "Jack of Hearts";
        } else if (i === 12) {
            strDeck[i] = "Queen of Hearts";
        } else if (i === 13) {
            strDeck[i] = "King of Hearts";
        } else {
            strDeck[i] = i + " of Hearts";
        }
    }
    // Adds "Diamonds" after the next 13 numbers
    else if (i > 13 && i < 27) {
        var j = i - 13;
        if (j === 1) {
            strDeck[i] = "Ace of Diamonds";
        } else if (j === 11) {
            strDeck[i] = "Jack of Diamonds";
        } else if (j === 12) {
            strDeck[i] = "Queen of Diamonds";
        } else if (j === 13) {
            strDeck[i] = "King of Diamonds";
        } else {
            strDeck[i] = j + " of Diamonds";
        }
    }
    // Adds "Clubs" after the next 13 numbers
    else if (i > 26 && i < 40) {
        var k = i - 26;
        if (k === 1) {
            strDeck[i] = "Ace of Clubs";
        } else if (k === 11) {
            strDeck[i] = "Jack of Clubs";
        } else if (k === 12) {
            strDeck[i] = "Queen of Clubs";
        } else if (k === 13) {
            strDeck[i] = "King of Clubs";
        } else {
            strDeck[i] = k + " of Clubs";
        }
    }
    // Adds "Spades" after the next 13 numbers
    else {
        var l = i - 39;
        if (l === 1) {
            strDeck[i] = "Ace of Spades";
        } else if (l === 11) {
            strDeck[i] = "Jack of Spades";
        } else if (l === 12) {
            strDeck[i] = "Queen of Spades";
        } else if (l === 13) {
            strDeck[i] = "King of Spades";
        } else {
            strDeck[i] = l + " of Spades";
        }
    }

    strDeck.push(i);

}

// Fix for weird elements at start and finish,
// no it's not professional, but it works.
strDeck.pop();
strDeck.shift();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// VARIABLES

// Creates users hand
var userCard1 = draw();
var userCard2 = draw();
var userHand = userCard1 + ", " + userCard2;

// Creates dealers hand
var dealerCard1 = draw();
var dealerCard2 = draw();
var dealerHand = dealerCard1 + ", " + dealerCard2;



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// FUNCTIONS

// Function for translating from int to str
function translate(card) {
    return strDeck[card - 1];
}

// Function for drawing cards
function draw() {
    return intDeck.splice(randArrayElem(intDeck), 1)[0];
}

// Print to <p> with id being id of html element you want to print to
function print(id, str) {
    document.getElementById(id).innerHTML = str;
}

// Function for getting a random element from an array
function randArrayElem(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function for making buttons when it's your turn
// TODO: fix buttons
function userTurn() {
    let hitButton = document.createElement("input");
    hitButton.innerHTML = "Hit";
    hitButton.id = "hit-button";
    hitButton.type = "button";
    hitButton.onclick = "userHit();";
    document.getElementById("display").appendChild(hitButton);

    let stickButton = document.createElement("input");
    stickButton.innerHTML = "Stick";
    stickButton.id = "stick-button";
    stickButton.type = "button";
    stickButton.onclick = "userStick();";
    stickButton.innerHTML = "Stick";

    document.getElementById("display").appendChild(stickButton);
}

// Function for Hitting
function userHit() {
    let userCard3 = draw();
    userHand = userHand + " and " + userCard3;
    print("display", "You drew: " + userCard3 + ". Your hand is " + userHand + ". Value: ")
}

// Function for Sticking
function userStick() {
    // TODO: make sticking do something
    return;
}

// Function for finding out user or dealer hand value
function handValue(hand) {
    return;
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// BUILDING THE GAME
// Displayed at start of game
print("welcome", "Welcome to Blackjack!");

// Displayed first round
print("display", "The dealer shuffles the deck and deals two cards to you. Your cards are: " + translate(userCard1) + " and " + translate(userCard2) + ". The dealer deals two cards to themselves, one of which is shown to you: " + translate(dealerCard1) + ". The value of your hand is " + handValue(userHand) + ", and the dealer's hand is " + handValue(dealerHand) + ".\nWhat do you do?" + userHand);

// Creates buttons for user's turn
userTurn();