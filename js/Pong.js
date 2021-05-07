// Declares canvas
const canvas = document.getElementById("canvas");

// Get context for drawing on canvas
const ctx = canvas.getContext("2d");

// Variables
const netWidth = 4;
const netHeight = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;

let upArrowPressed = false;
let downArrowPressed = false;

// Objects
const net = {
    x: canvas.width / 2 - netWidth / 2,
    y: 0,
    width: netWidth,
    height: netHeight,
    color: "#FFF",
    score: 0
};

// Draws black canvas
function render() {
    // Sets the colour to fill
    ctx.fillStyle = "#000";

    // Draws the black board
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

render();