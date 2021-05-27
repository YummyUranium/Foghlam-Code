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

// Stores all cards drawn
var cardsDrawn = [];

// Creates users hand
var userCard1 = draw();
var userCard2 = draw();
var userHand = userCard1 + ", " + userCard2;
var userCardsDrawn = 2;

// Creates dealers hand
var dealerCard1 = draw();
var dealerCard2 = draw();
var dealerHand = dealerCard1 + ", " + dealerCard2;
var dealerCardsDrawn = 2;


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// FUNCTIONS

// Function for translating from int to str
// TODO: make sure this works
function translate(card) {

    // Takes the index of strDeck card and translates it to intDeck
    return intDeck[card - 1];

}

// Function for drawing cards
function draw() {

    // Declares card drawn
    let newCard = strDeck.slice(randArrayElem(strDeck))[0];

    // Making sure the variable has a boolean value, also
    // removes the need to declare it as true in a later statement
    let newCardIsUnique = true;

    // Checks if the card drawn is unique
    for (var c of cardsDrawn) {
        if (cardsDrawn[c] == newCard) {
            newCardIsUnique = false;
            return newCardIsUnique;
        }
    }

    // Checks if the card drawn is unique and therefore playable
    if (!newCardIsUnique) {
        draw();
    }

    // Adds the card drawn to the cardsDrawn array so it can be
    // checked later
    cardsDrawn.push(newCard);

    // Finally, returns the card drawn
    return newCard;

}

// Print to <p> with id being id of html element you want to print to
function print(id, str) {
    document.getElementById(id).innerHTML = str;
}

// Function for getting a random element from an array
function randArrayElem(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function for Hitting
function userHit() {
    let userCardDrawn = draw();
    userHand = userHand + ", " + userCardDrawn;
    userCardsDrawn++;
    return print("display", "You drew: " + userCardDrawn + ". Hand value: " + handValue(userHand) + ".");
}

// Function for Sticking
function userStick() {
    return false;
}

// Function for finding out user or dealer hand value
function handValue(hand) {

    if (hand === userHand) {

        // Creates array for all the characters in userHand
        var userHandCharArr = userHand.split("");

        // Filters all non-integers and removes them
        var filteredUserHand = userHandCharArr.map(function(value) {
            return parseInt(value.replace(/\D/g, ''), 10);
        });

        // Adds all integers together hopefully
        return add(filteredUserHand);

    } else if (hand === dealerHand) {
        // Creates array for all the characters in userHand
        var dealerHandCharArr = userHand.split("");

        // Filters all non-integers and removes them
        var filteredDealerHand = dealerHandCharArr.map(function(value) {
            return parseInt(value.replace(/\D/g, ''), 10);
        });

        // Adds all integers together hopefully
        return add(filteredDealerHand);

    } else {
        return console.log("Error: Reading hand value failed.");
    }

}

// Adds all the elements of an array together
function add(arr) {
    return arr.reduce((a, b) => a + b, 0);
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// BUILDING THE GAME
// Displayed at start of game
print("welcome", "Welcome to Blackjack!");

// Displayed first round
print("display", "The dealer shuffles the deck and deals two cards to you. Your cards are: " + userCard1 + " and " + userCard2 + ". The dealer deals two cards to themselves, one of which is shown to you: " + dealerCard1 + ". The value of your hand is " + handValue(userHand) + ".\nWhat do you do? " + userHand);

//