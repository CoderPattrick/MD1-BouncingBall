let bar ={
    x:230,
    y:480,
    length:60,
    height:10,
    speed:3
}
//bar là duy nhất nên chỉ cần tạo 1obj bar
let moveLeft,moveLeftBall,moveRight,moveRightBall,checkMove,checkMoveBall;
//biến sử dụng để move ball và bar đồng thời khi mới bắt đầu game và chưa thả (release) ball
//checkMove và checkMoveBall có 3 kiểu: 0-đứng yên,1-rẽ trái,2-rẽ phải
function turnLeft(){
    checkMove=1;
    clearTimeout(moveRight);
    bar.x-=bar.speed;
    moveLeft = setTimeout(turnLeft,20);
}
function turnLeftBall(){
    checkMoveBall=1;
    clearTimeout(moveRightBall);
    balls[0].x-=bar.speed;
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
    balls[0].x += bar.speed;
    moveRightBall = setTimeout(turnRightBall, 20);
}

window.addEventListener("keydown",function (event){
    if (event.keyCode == 37){
        if(bar.x>=0){
            //kiểm soát để ball k vượt khung trái
            if(checkPause==false){
                //kiểm tra xem game bị pause không, nếu đã pause thì không kích hoạt function onclick
                if(checkMove!=1){
                    //kiểm tra xem đã bấm rẽ trái chưa, nếu bấm rồi thì không kích hoạt nữa để tránh trùng function gây lỗi boost tốc độ
                    turnLeft();
                    if(checkRelease==false){
                        //kiểm tra bóng ở trạng thái đã release hay chưa(chưa release khi mới bắt đầu game), nếu chưa thì move bóng cùng với bar
                        if(checkMoveBall!=1) {
                            turnLeftBall();
                        }
                    }
                }
            }
        }
    } else if (event.keyCode == 39){
        if(bar.x+bar.length<=context.canvas.width){
            //kiểm soát để ball k vượt khung phải
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
                balls[0].y--;
                loop();
            }
        }
        checkRelease=true;
    }
} )
function checkBallPositionStart() {
    if (checkRelease == false) {
        if (bar.x <= 0) {
            clearTimeout(moveLeftBall);
        }
        if (bar.x + bar.length >= context.canvas.width) {
            clearTimeout(moveRightBall);
        }
    }
}
