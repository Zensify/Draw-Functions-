let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

function drawStickman(x, y, color) {
    // Draw a Stickman with top-left corner (x, y)
    // and with the given color
    stroke(color);
    circle(x + 20, y + 20, 20, "stroke"); // Head
    line(x + 20, y + 40, x + 20, y + 80); // Body
    line(x, y + 70, x + 20, y + 50); // Left Arm
    line(x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(x, y + 110, x + 20, y + 80); // Left Leg
    line(x + 40, y + 110, x + 20, y + 80); // Right Leg
}
drawStickman(400, 100, "red");

//function drawrect() {
ctx.rect(20, 20, 150, 100);
ctx.stroke();
//}