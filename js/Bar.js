let bar ={
    x:230,
    y:480,
    length:60,
    height:10,
    speed:3
}
let moveLeft,moveRight,checkMove;

function turnLeft(){
    checkMove=1;
    clearTimeout(moveRight);
    bar.x-=bar.speed;
    moveLeft = setTimeout(turnLeft,20);
}
function turnRight(){
    checkMove=2;
    clearTimeout(moveLeft)
    bar.x+=bar.speed;
    moveRight = setTimeout(turnRight,20);
}
window.addEventListener("keydown",function (event){
    if (event.keyCode == 37){
        if(bar.x>=0){
            if(checkMove!=1){
                turnLeft();
            }
        }
    } else if (event.keyCode == 39){
        if(bar.x+bar.length<=500){
            if(checkMove!=2){
                turnRight();
            }
        }
    }
    else if(event.keyCode == 40){
        clearTimeout(moveRight);
        clearTimeout(moveLeft);
        checkMove=0;
    }
} )
