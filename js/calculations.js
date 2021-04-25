// Define calculation function
function projectileCalculate(v1,theta,dy,ay)
{
  var v1y = v1 * Math.sin(theta/180*Math.PI);
  return Math.round(v1 * Math.cos(theta/180*Math.PI) * (-v1y - Math.sqrt(v1y*v1y + 2*ay*dy))/ay);
}

// Compare calculated range to assigned range
function compareRange(gRange,cRange)
{
    var result = false;
    if (gRange == cRange) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}

// Define function that results in "Go!" button click
function doClick()
{
    var v1 = parseFloat($("#input_velocity").val());
    var theta = parseFloat($("#input_angle").val());
    var dy = -1;
    var ay = -9.8;
    var gRange = 4 //parseFloat($("#input_range").val()); // given range
    var cRange = projectileCalculate(v1,theta,dy,ay); // calculated range
    var result = compareRange(gRange,cRange);
    var message = "The input range = the calculated range: ";
    message += result;
    message += "<br> You landed at " + cRange;

    $("#output").html(message);
    
    if(result){
        hit();
    } else {
        miss();
    }
}
