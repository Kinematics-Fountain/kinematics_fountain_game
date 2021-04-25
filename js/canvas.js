/* 
 * HTML5 Canvas
 */
$(document).ready(function () {

    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 700;
    
    var defaultTP = 6;
    
    //placeholders
    ctx.fillRect(10, 10, 50,50);
    ctx.font = "40px Arial";
    ctx.fillText(" x " + defaultTP, 60, 50);
    ctx.fillRect(10, 300, 50,50);
    ctx.fillRect(500,500,20,20);
    
    //Ruler 100px = 1m
    var ruler = 1;
    for (i=100; i < 700; i+=100){
        ctx.font = "20px Arial";
        ctx.fillText(ruler, i, 680);
        ruler++;
    };
        
    //Images
    var tp = new Image();
    tp.src = 'imgs/devpost_thumbnail.jpg';
    
    var statue = new Image();
    statue.src = 'imgs/statue.png';
    
    var lily = new Image();
    lily.src = 'imgs/lilypad.png';
    
    ctx.drawImage(tp, 10, 10, 70, 70);
    //canvas.drawImage();
    //canvas.drawImage();
    
    //function component

    

});


