
var canvas = document.getElementById('main-canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
var context = canvas.getContext('2d');
var lineWidth=20;
var centerX = canvas.width / 2;
var centerY = canvas.height / 3;
var radius = 100;


drawCircles();
drawBox(centerX-350, centerY-150,700,400,'black');

function drawCircles(){
      drawCircle(centerX,centerY, 'black');

      drawCircle(centerX+radius*2.2,centerY,'red');

      drawCircle(centerX-radius*2.2,centerY,'blue');


      drawCircle(centerX+radius*1.2,centerY+radius, 'green');

      drawCircle(centerX-radius*1.2,centerY+radius, 'yellow');

      drawRightPatch(centerX-radius*2.2,centerY,'blue');
      drawBottomLeftPatch(centerX,centerY, 'black');
      drawRightPatch(centerX,centerY,'black');
      drawBottomRightPatch(centerX+radius*2.2,centerY, 'red');
}
function drawBox(x,y,width, height, color){
      context.beginPath();
      context.rect(x,y, width,height);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.stroke();
      context.closePath();

      context.beginPath();
      context.moveTo(x-3,y-3);
      context.lineTo(x+50,y-50);

      context.lineTo(x-3+width+50,y-50);
      context.lineTo(x-3+width,y);
      context.moveTo(x+10+width+50,y-60);
      context.lineTo(x+10+width+50,y+height-50);
      context.lineTo(x+width+3,y+height+3);

      context.stroke();
      context.closePath();
}

function drawCircle(x, y, color)
{
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.stroke();
      context.closePath();
}
function drawRightPatch(x, y, color)
{
      context.beginPath();
      context.arc(x, y, radius, 1.9*Math.PI, 0.3 * Math.PI, false);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.stroke();
      context.closePath();
}

function drawBottomLeftPatch(x, y, color)
{
      context.beginPath();
      context.arc(x, y, radius, 2.5*Math.PI, 2.7 * Math.PI, false);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.stroke();
      context.closePath();
}
function drawBottomRightPatch(x, y, color)
{
      context.beginPath();
      context.arc(x, y, radius, 2.2*Math.PI, 2.7 * Math.PI, false);
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.stroke();
      context.closePath();
}
