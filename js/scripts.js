
$(document).ready(function () {
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
        showHype();
    }

    //If target not hit...
    function miss() {
        tp-=1;
        console.log('miss! TP count = ' + tp);

        //TODO: TP drop
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
    }

    //TODO: Drop TP roll on cherub's head
    function tpDrop(){

    }

    //Relocate the target graphic and associated values
    function moveTarget(){

    }

    //Game over
    function gameOver() {
        console.log('Game Over!');
        //TODO: Trigger graphics/text
        
        reset();

        //TODO: relocate target
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
});
