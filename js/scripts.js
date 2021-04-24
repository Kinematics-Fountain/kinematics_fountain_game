
$(document).ready(function () {


    /* 
     * Test Code
     * Controls located in footer
     */
    var btn_hit = document.getElementById('test_hit');


    $(btn_hit).click(hit());
    $("#test_miss").click(miss());
    
    
    function hit() {
        console.log('hit!');
    }

    function miss() {
        console.log('miss!');
    }

    function range() {
        Math.floor((Math.random() * 5) + 1);
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