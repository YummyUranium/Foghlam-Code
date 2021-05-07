// Declares canvas
const canvas = document.getElementById("canvas");

// Get context for drawing on canvas
const ctx = canvas.getContext("2d");

// Draws black canvas
function render() {
    // Sets the colour to fill
    ctx.fillStyle = "black";

    // Draws the black board
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

render()