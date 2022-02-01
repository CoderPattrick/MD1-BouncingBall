let context = document.querySelector("canvas").getContext('2d');
let cHeight = document.documentElement.clientHeight;
let cWidth = document.documentElement.clientWidth;
let balls=[];
function loop(){
    window.requestAnimationFrame(loop);
    context.canvas.height=cHeight;
    context.canvas.width=cWidth;
    drawBall();
    drawBar();
}
function drawBall(){
    context.fillStyle = ball.color;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    context.fill();
    ball.updatePosition();
}
loop();