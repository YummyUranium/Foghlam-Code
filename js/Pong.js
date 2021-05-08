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

// Net
const net = {
    x: canvas.width / 2 - netWidth / 2,
    y: 0,
    width: netWidth,
    height: netHeight,
    color: "#FFF",
    score: 0
};

// User Paddle
const user = {
    x: 10,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "#FFF",
    score: 0
};

// AI Paddle
const ai = {
    x: canvas.width - (paddleWidth + 10),
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "#FFF",
    score: 0
};

// Ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: "#05EDFF"
}


// Functions to draw objects
function drawNet() {
    // Colour of net:
    ctx.fillStyle = net.color;

    // Syntax -> fillRect(x, y, width, height)
    ctx.fillRect(net.x, net.y, net.width, net.height);
}

// Draw Score
function drawScore(x, y, score) {
    ctx.fillStyle = "#FFF";
    ctx.font = "35px sans-serif"

    // Syntax -> fillText(text, x, y)
    ctx.fillText(score, x, y);
}

// Draw Paddle
function drawPaddle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

// Draw Ball
function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    // Syntax -> arc(x, y, radius, startAngle, endAngle, anti_clockwise_or_not)
    ctx.arc(x, y, radius, 0, Math.PI * 2, true); // pi x 2 radians
    ctx.closePath();
    ctx.fill();
}


// Draws black canvas
function render() {
    // Sets the colour to fill
    ctx.fillStyle = "#000";

    // Draws the black board
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

    // Draws the net
    drawNet();


    /*  The reason the scores are divided by four, and in the AI's case is then
        multiplied is to quarter the screen up. */

    // Draws user score
    drawScore(canvas.width / 4, canvas.height / 6, user.score);

    // Draws AI score
    drawScore(3 * canvas.width / 4, canvas.height / 6, ai.score);

    // Draws user paddle
    drawPaddle(user.x, user.y, user.width, user.height, user.color);

    // Draws AI paddle
    drawPaddle(ai.x, ai.y, ai.width, ai.height, ai.color);

    // Draws Ball
    drawBall(ball.x, ball.y, ball.radius, ball.color);
}

render();