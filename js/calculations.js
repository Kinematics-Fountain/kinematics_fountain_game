// Define calculation function
function projectileCalculate(v1,theta,dy,ay)
{
  var dy = -1
  var ay = -9.8
  var v1y = v1 * Math.sin(theta/180*Math.PI);
  return Math.round(v1 * Math.cos(theta/180*Math.PI) * (-v1y - Math.sqrt(v1y*v1y + 2*ay*dy))/ay);
}

// Define function that results in "Go!" button click
function doClick()
{
  var v1 = parseFloat($("#input_velocity").val());
  var theta = parseFloat($("#input_angle").val());
  var dy = -1;
  var ay = -9.8;
  var result = projectileCalculate(v1,theta,dy,ay);
  var message = "The projectile will travel ";
  message += result;
  message += "m horizontally.<br/>";

  $("#output").html(message);

}
