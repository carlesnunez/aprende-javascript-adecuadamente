var my_canvas = document.getElementById("canvas");

var context = my_canvas.getContext("2d");

context.moveTo(20,20);
context.lineTo(100, 20);
context.beginPath()
context.arc(95,85,40,0,2*Math.PI);
context.fillStyle = "red";
context.fillRect(10,10,50,20);
context.font = "30px Garamond";
context.fillText("Hello!", 15, 55);