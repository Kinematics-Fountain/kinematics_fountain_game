
$(document).ready(function () {
    var defaultScore = 0;
    var defaultTP = 6;

    var score = defaultScore;
    var tp = defaultTP;

    var scoreCount = document.getElementById("player_score");


    /*
     * Test Code
     * Controls located in footer
     */

    $("#test_hit").click(hit);
    $("#test_miss").click(miss);
    $("#test_gameOver").click(gameOver);

    //Increase score
    function hit() {
        score+=1;
        scoreCount.innerHTML = score;
        console.log('hit!');
        //TODO: trigger hype
    }

    function miss() {
        tp-=1;
        console.log('miss! TP count = ' + tp);

        //TODO: TP drop

        if (tp == 0){
            //TODO: trigger game over
            console.log('Better luck next time');
        }
    }



document.getElementById("given_range").value = randomNumber(4);


    //HYPE!!
    function showHype(){

    }

    //Drop TP roll on cherub's head
    function tpDrop(){

    }

    //Relocate the target graphic and associated values
    function moveTarget(){

    }

    //Game over
    function gameOver() {
        console.log('Game Over!');
        //TODO: Trigger graphics/text

        //Reset Score
        score = defaultScore;
        scoreCount.innerHTML = score;

        //Reset TP count
        tp = defaultTP;


        //TODO: relocate target
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
