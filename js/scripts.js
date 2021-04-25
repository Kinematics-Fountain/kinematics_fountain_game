
$(document).ready(function () {
    var score = 0;
    var tp = 6;
    
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
    }

    function miss() {
        tp-=1;
        console.log('miss! TP count = ' + tp);
        
        if (tp == 0){
            //TODO: game over
            console.log('Better luck next time');
        }
    }

    function range() {
        Math.floor((Math.random() * 5) + 1);
    }
    
    
    function gameOver() {
        console.log('Game Over!');
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