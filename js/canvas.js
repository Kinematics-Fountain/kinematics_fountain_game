/* 
 * HTML5 Canvas
 */
//$(document).ready(function () {

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;

//ctx.fillStyle = "aqua";
//ctx.fillRect(0, 500, 700, 200);

//ctx.fillStyle = "silver";
//ctx.arc(350, 500, 50, 0, 2 * Math.PI);
//ctx.fill();
//ctx.fillRect(35, 600, 105, 100);

ctx.fillStyle = "#000";

var defaultTP = 6;
var tp = defaultTP;

//placeholders
//    ctx.fillRect(10, 10, 50,50);
//    ctx.font = "40px Arial";
//    ctx.fillText(" x " + defaultTP, 60, 50);
//    ctx.fillRect(10, 300, 50,50);
//    ctx.fillRect(500,500,20,20);

//Ruler 100px = 1m
var ruler = 0;
for (i = 100; i < 700; i += 100) {
    ctx.font = "20px Arial";
    ctx.fillText(ruler, i, 680);
    ruler++;
}
;

//Images
var img_tp = new Image();
img_tp.src = 'imgs/tp.png';

var img_statue = new Image();
img_statue.src = 'imgs/statue2.png';

var img_lily = new Image();
img_lily.src = 'imgs/lilypad.png';

img_tp.onload = function () {
    ctx.drawImage(img_tp, 20, 20, 50, 50);
};

ctx.font = "40px Arial";
ctx.fillText(" x " + tp, 75, 55);

img_statue.onload = function () {
    ctx.drawImage(img_statue, 15, 150);
};
img_lily.onload = function () {
    ctx.drawImage(img_lily, 460, 500, 76, 43);
};




//});


