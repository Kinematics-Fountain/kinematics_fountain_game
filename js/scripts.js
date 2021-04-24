



/* 
 * Test Code
 * Controls located in footer
 */

$("#test_hit").click(hit());
$("#test_miss").click(miss());

function hit(){
    console.log('hit!');
}

function miss(){
    console.log('miss!');
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