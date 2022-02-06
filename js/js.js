let context = document.querySelector("canvas").getContext('2d');
let running = null;
let starting = null;
let checkPause = null;
let checkGameOver=false;
let levelGame=1;

function loop(){
    cancelAnimationFrame(starting);
    running = requestAnimationFrame(loop);
    checkPause = false;
    context.canvas.height=500;
    context.canvas.width=500;
    drawBorder();
    drawObstacle();
    // draw1stObstacle();
    // draw2ndObstacle();
    // draw3rdObstacle();
    for (let i = 0; i < balls.length; i++) {
        balls[i].checkBallMetBar();
        balls[i].checkBallMeetObstacle();
        checkWin();
        if(checkBallMetObstacle){
            randomAddBoost(balls[i].x,balls[i].y);
            checkBallMetObstacle=false;
        }
        balls[i].drawBall();
    }
    if(boosts.length>0) {
        for (let i = 0; i < boosts.length; i++) {
            boosts[i].drawBoost();
        }
    }
    if(minusBoosts.length>0) {
        for (let i = 0; i < minusBoosts.length; i++) {
            minusBoosts[i].drawMinusBoost();
        }
    }
    checkBarPosition();
    drawBar();
}
function addButtonStart(){
    let a = '<button onclick="start1()">Start</button>'
    document.getElementById("buttonStart").innerHTML=a;
}
function addButtonStart2(){
    let a = '<button onclick="start2()">Start</button>'
    document.getElementById("buttonStart").innerHTML=a;
}

function addButtonStartFake(){
    let a = '<button>Start</button>'
    document.getElementById("buttonStart").innerHTML=a;
}
addButtonStart()
function start1(){
    checkGameOver=false;
    addButtonStartFake();
    showScoreInProcess();
    startGame();
}
function start2(){
    checkGameOver=false;
    addButtonStartFake();
    showScoreInProcess();
    restartGame();
}
function addButtonStartLv2(){
    addButtonStartFake();
    showScoreInProcess();
    resetObstacle();
    setObstacleLv2();
    let tempBalls =[];
    tempBalls.push(new Ball(250,0,7));
    balls=tempBalls;
    balls[0].setBallLocation(ballStartLocation);
    balls[0].r=7;
    balls[0].color=colorBall();
    balls[0].direction=1.55*Math.PI;
    balls[0].speed=2.7;
    startGame();
}
function startGame(){
    checkPause = false;
    if(checkRelease==false) {
        starting = requestAnimationFrame(startGame);
        context.canvas.height = 500;
        context.canvas.width = 500;
        drawBorder();
        drawObstacle();
        // draw1stObstacle();
        // draw2ndObstacle();
        // draw3rdObstacle();
        checkBallPositionStart();
        balls[0].drawBallStart();
        checkBarPosition();
        drawBar();
    }
    if(checkRelease){
        loop();
    }
}
function stopGame(){
    if(checkGameOver==false) {
        addButtonStart();
        cancelAnimationFrame(running);
        cancelAnimationFrame(starting);
        clearTimeout(moveLeft);
        clearTimeout(moveRight);
        clearTimeout(moveLeftBall);
        clearTimeout(moveRightBall);
        checkPause = true;
    }
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
    if (bar.x + bar.length > context.canvas.width) {
        clearTimeout(moveRight);
        bar.x = context.canvas.width - bar.length;
    }
}

drawBorder();
showScoreInProcess();
