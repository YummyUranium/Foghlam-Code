// BUILDING THE DECK

// Declares arrays for card values
var intDeck = [];
var strDeck = [];

// Adds 52 numbers to strDeck deck array, renames strDeck numbers to strings
for (var i = 1; i <= 52; i++) {

    // Adding the strDeck values

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

    // Adding the intDeck values

    if (i <= 10) {
        intDeck.push(i);
    } else if (i === 11 || i === 12 || i === 13 || i === 24 || i === 25 || i === 26 || i === 37 || i === 38 || i === 39 || i === 50 || i === 51 || i === 52) {
        intDeck.push(10);
    } else if (i > 13 && i <= 23) {
        intDeck.push(i - 13);
    } else if (i > 26 && i <= 36) {
        intDeck.push(i - 26);
    } else {
        intDeck.push(i - 39);
    }

}

// fix for extra elements
strDeck.pop();
strDeck.shift();


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// VARIABLES

// Creates users hand
var userCard1 = draw();
var userCard2 = draw();
var userHand = userCard1 + ", " + userCard2;
var userCardsDrawn = 2;

// Creates dealers hand
var dealerCard1 = draw();
var dealerCard2 = draw();
var dealerHand = dealerCard1 + ", " + dealerCard2;

// Var for updating each appended display num
var displayCount = 1;


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
function createButtons() {
    let hitButton = document.createElement("input");
    hitButton.innerHTML = "Hit";
    hitButton.id = "hit-button";
    hitButton.type = "button";
    hitButton.value = "Hit";
    hitButton.onclick = userHit();
    document.getElementById("display").appendChild(hitButton);

    let stickButton = document.createElement("input");
    stickButton.innerHTML = "Stick";
    stickButton.id = "stick-button";
    stickButton.type = "button";
    stickButton.value = "Stick";
    stickButton.onclick = userStick();
    document.getElementById("display").appendChild(stickButton);
}

// Function for Hitting
function userHit() {
    let userCardDrawn = draw();
    userHand = userHand + " and " + userCardDrawn;
    userCardsDrawn++;
    return print(createDisplayElement("p", "userHit", "user-hit", "display" + displayCount), "You drew: " + userCardDrawn + ". Your hand is " + userHand + ". Value: ")
}

// Function for Sticking
function userStick() {
    return false;
}

// Creates elements in html
function createDisplayElement(displayType, innerHTML, id, type, value, onclick) {
    let elementCreated = document.createElement(displayType);
    elementCreated.innerHTML = innerHTML;
    elementCreated.id = id;
    elementCreated.type = type;
    elementCreated.value = value;
    elementCreated.onclick = onclick;
    document.getElementById("display" + displayCount).appendChild(elementCreated);
    displayCount++;
    return elementCreated;
}

// Returns array of user's hand
function returnUserHand() {
    var userHandValArr = [];

    for (var a = 0; a <= userCardsDrawn.length; a++) {;
    }
}

// Function for finding out user or dealer hand value
// TODO: make this work
function handValue(hand) {

    var valueArray = [hand.split(/, /)];
    var value;

    for (var m = 0; m < valueArray.length; m++) {

        var n = m;

        if (valueArray[m] == "11" || valueArray[m] == "12" || valueArray[m] == "13") {
            n = 10;
            return n;
        }

        value += n;
    }

    return value;

}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// BUILDING THE GAME
// Displayed at start of game
print("welcome", "Welcome to Blackjack!");

// Displayed first round
print("display", "The dealer shuffles the deck and deals two cards to you. Your cards are: " + translate(userCard1) + " and " + translate(userCard2) + ". The dealer deals two cards to themselves, one of which is shown to you: " + translate(dealerCard1) + ". The value of your hand is " + handValue(userHand) + ", and the dealer's hand is " + handValue(dealerHand) + ".\nWhat do you do?" + userHand);

// Creates buttons for user's turn
createButtons();