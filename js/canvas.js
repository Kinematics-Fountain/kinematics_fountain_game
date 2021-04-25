/* 
 * HTML5 Canvas
 */
$(function () {

    canvas = document.getElementById("gameCanvas");
    //canvasContext = canvas.getContext('2d');
    
    //Images
    var tp = new Image();
    tp.src = '../imgs/tp.png';
    
    var statue = new Image();
    statue.src = '../imgs/statue.png';
    
    var lily = new Image();
    lily.src = '../imgs/lilypad.png';
    
    

    function startGame() {
        myGameArea.start();
    }

    var myGameArea = {
        canvas: canvas,
        start: function () {
            this.canvas.width = 700;
            this.canvas.height = 700;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        }
    };
});


