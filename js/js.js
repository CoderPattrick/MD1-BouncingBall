let context = document.querySelector("canvas").getContext('2d');
let running = null;

function loop(){
    running = requestAnimationFrame(loop);
    context.canvas.height=500;
    context.canvas.width=500;
    drawBorder();
    ball.checkBallMetBar();
    ball.drawBall();
    checkBarPosition();
    drawBar();
}
function stopGame(){
    cancelAnimationFrame(running);
}
function drawBorder(){
    context.beginPath();
    context.rect(0,0,500,500);
    context.stroke();
}

function drawBar(){
    context.fillStyle = 'rgb(0,0,1)';
    context.beginPath();
    context.fillRect(bar.x, bar.y, bar.length, bar.height);
    context.stroke();
}
function checkBarPosition() {
    if (bar.x < 0) {
        clearTimeout(moveLeft);
        bar.x = 0;
    }
    if (bar.x + bar.length > 500) {
        clearTimeout(moveRight);
        bar.x = 500 - bar.length;
    }
}

drawBorder();

