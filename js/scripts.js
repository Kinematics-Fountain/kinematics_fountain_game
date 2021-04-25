
//$(document).ready(function () {
    var defaultScore = 0;
    //var defaultTP = 6;

    var score = defaultScore;
    //var tp = defaultTP;

    var scoreCount = document.getElementById("player_score");


    /*
     * Test Code
     * Controls located in footer
     */

    $("#test_hit").click(hit);
    $("#test_miss").click(miss);
    $("#test_gameOver").click(gameOver);

    //If target is hit...
    function hit() {
        score+=1;
        scoreCount.innerHTML = score;
        console.log('hit!');
        if(score%10 == 0){
           showHype();
        }
    }

    //If target not hit...
    function miss() {
        tp-=1;
        console.log('miss! TP count = ' + tp);

        tpDrop(); //Trigger animation
        
        
        ctx.clearRect(70,20,100,100);
        ctx.font = "40px Arial";
        ctx.fillText(" x " + tp, 75, 55);

        if (tp == 0){
            //TODO: trigger game over
            gameOver();
            console.log('Better luck next time');
        }
    }


    //TODO: HYPE!!
    function showHype(){
        console.log('HYPE! HYPE! HYPE!');
        //effects triggered or go here
        $('#memebox').css("background","url('imgs/gifs/happy_kid.gif')");
        $('#memebox').show('slow').delay(3000).hide('slow');
    }

    //TODO: Drop TP roll on cherub's head
    function tpDrop(){

    }
    
    function sadMeme(){
        $('#memebox').css("background","url('imgs/gifs/math_dog.gif')");
        $('#memebox').show('slow').delay(3000).hide('slow');
    }

    //TODO: Relocate the target graphic and associated values
    function moveTarget(){

    }

    //Game over
    function gameOver() {
        console.log('Game Over!');
        
        sadMeme();       
        reset();
        
        //TODO: moveTarget();
    }
    
    function reset(){
        //Reset Score
        score = defaultScore;
        scoreCount.innerHTML = score;
        
        //Reset TP count
        tp = defaultTP;
        ctx.clearRect(70,20,70,70);
        ctx.font = "40px Arial";
        ctx.fillText(" x " + tp, 75, 55);
        
    }
    
    //function doClick(){
        //var result = calculations();
       // console.log("Result is " + result);
   // }


    /*Pseudocode
     *
     * user presses Go!
     *
     * capture inputs
     *
     * calculate landing location
     *
     * if (landing == target)
     *      hit! Score increases
     *      relocate target
     * else
     *      miss! TP count decreases
     *
     */
//});
