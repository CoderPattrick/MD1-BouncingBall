let context = document.querySelector("canvas").getContext('2d');
let running = null;
let starting = null;
let checkPause = null;

function loop(){
    cancelAnimationFrame(starting);
    running = requestAnimationFrame(loop);
    checkPause = false;
    context.canvas.height=500;
    context.canvas.width=500;
    drawBorder();
    ball.checkBallMetBar();
    ball.drawBall();
    checkBarPosition();
    drawBar();
}
function addButtonStart(){
    let a = '<button onclick="start1()">Start</button>'
    document.getElementById("buttonStart").innerHTML=a;
}
function addButtonStartFake(){
    let a = '<button>Start</button>'
    document.getElementById("buttonStart").innerHTML=a;
}
addButtonStart()
function start1(){
    addButtonStartFake();
    startGame();
}
function startGame(){
    checkPause = false;
    if(checkRelease==false) {
        starting = requestAnimationFrame(startGame);
        context.canvas.height = 500;
        context.canvas.width = 500;
        drawBorder();
        ball.drawBallStart();
        checkBarPosition();
        drawBar();
    }
    if(checkRelease){
        loop();
    }
}
function stopGame(){
    addButtonStart();
    cancelAnimationFrame(running);
    cancelAnimationFrame(starting);
    clearTimeout(moveLeft);
    clearTimeout(moveRight);
    clearTimeout(moveLeftBall);
    clearTimeout(moveRightBall);
    checkPause = true;
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

