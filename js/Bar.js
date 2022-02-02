let bar ={
    x:230,
    y:480,
    length:60,
    height:10,
    speed:3
}
let moveLeft,moveLeftBall,moveRight,moveRightBall,checkMove,checkMoveBall;

function turnLeft(){
    checkMove=1;
    clearTimeout(moveRight);
    bar.x-=bar.speed;
    moveLeft = setTimeout(turnLeft,20);
}
function turnLeftBall(){
    checkMoveBall=1;
    clearTimeout(moveRightBall);
    ball.x-=bar.speed;
    moveLeftBall = setTimeout(turnLeftBall,20);
}
function turnRight(){
    checkMove=2;
    clearTimeout(moveLeft)
    bar.x+=bar.speed;
    moveRight = setTimeout(turnRight,20);
}
function turnRightBall() {
    checkMoveBall = 2;
    clearTimeout(moveLeftBall);
    ball.x += bar.speed;
    moveRightBall = setTimeout(turnRightBall, 20);
}

window.addEventListener("keydown",function (event){
    if (event.keyCode == 37){
        if(bar.x>=0){
            if(checkPause==false){
                if(checkMove!=1){
                    turnLeft();
                    if(checkRelease==false){
                        if(checkMoveBall!=1) {
                            turnLeftBall();
                        }
                    }
                }
            }
        }
    } else if (event.keyCode == 39){
        if(bar.x+bar.length<=500){
            if(checkPause==false){
                if(checkMove!=2){
                    turnRight();
                    if(checkRelease==false) {
                        if(checkMoveBall!=2){
                            turnRightBall();
                        }
                    }
                }
            }
        }
    }
    else if(event.keyCode == 40){
        clearTimeout(moveRight);
        clearTimeout(moveLeft);
        checkMove=0;
        if(checkRelease==false){
            clearTimeout(moveLeftBall);
            clearTimeout(moveRightBall);
            checkMoveBall =0;
        }
    }
    else if(event.keyCode == 38){
        if(checkRelease==false) {
            if(checkPause==false){
                cancelAnimationFrame(starting);
                clearTimeout(moveRightBall);
                clearTimeout(moveLeftBall);
                ball.y--;
                loop();
            }
        }
        checkRelease=true;
    }

} )
