class Obstacle{
    constructor(x,y,hp) {
        this.x=x;
        this.y=y;
        this.hp=hp;
        this.lengthh = 59.5;
        this.height = 20;
        this.color=null;
    }
    getColor(){
        if(this.hp==1){
            this.color='rgb(0,255,28)';
        }
        else if(this.hp==2){
            this.color='rgb(0,0,255)';
        }
        else if(this.hp==3) {
            this.color='rgb(255,0,0)';
        }
        else {
            this.color='rgb(0,0,0)';
        }
    }
    updateColorAndHPAfterHit(){
        this.hp--;
        this.getColor();
    }
}

function drawObstacleFunc(obj){
    context.fillStyle = obj.color;
    context.beginPath();
    context.fillRect(obj.x, obj.y, obj.lengthh, obj.height);
    context.stroke();
}
function drawObstacle(){
    for (let i = 0; i < listObstacle.length; i++) {
        for (let j = 0; j < listObstacle[i].length; j++) {
            listObstacle[i][j].getColor();
            drawObstacleFunc(listObstacle[i][j])
        }
    }
}
function setObstacle() {
    create1st6obstacle();
    create2nd6obstacle();
    create3rd6obstacle();
    listObstacle.push(list1stObstacle);
    listObstacle.push(list2ndObstacle);
    listObstacle.push(list3rdObstacle);
}
function resetObstacle(){
    listObstacle=[];
    list1stObstacle=[];
    list2ndObstacle=[];
    list3rdObstacle=[];
}
// stopGame();
// checkGameOver = true;
// addButtonStart2();
// updateScore();
// showHighScore();
// document.getElementById("gameOver").innerText = 'GAME OVER';
// subScore = 0;
function checkWin(){
    if(countNumbOfObstacle==0){
        stopGame();
        updateScore();
        showHighScore();
        if(levelGame==2){
            document.getElementById("gameOver").innerText = 'Level '+levelGame+' Passed!';
            addButtonStartFake();
            return 1;
            //End In Lv2;
        }
        addButtonStartLv2();
        document.getElementById("gameOver").innerText = 'Level '+levelGame+' Passed!';
        levelGame++;
        setTimeout(clearAlert,2000);
    }
}
function clearAlert(){
    document.getElementById("gameOver").innerText ='';
}
let listObstacle=[];
let list1stObstacle=[];
let list2ndObstacle=[];
let list3rdObstacle=[];
let countNumbOfObstacle=0;

// function draw1stObstacleFunc(obj){
//     context.fillStyle = 'rgb(255,0,0)';
//     context.beginPath();
//     context.fillRect(obj.x, obj.y, obj.lengthh, obj.height);
//     context.stroke();
// }
// function draw1stObstacle() {
//     for (let i = 0; i < 6; i++) {
//         draw1stObstacleFunc(list1stObstacle[i]);
//     }
// }function draw2ndObstacleFunc(obj){
//     context.fillStyle = 'rgb(0,0,255)';
//     context.beginPath();
//     context.fillRect(obj.x, obj.y, obj.lengthh, obj.height);
//     context.stroke();
// }
// function draw2ndObstacle() {
//     for (let i = 0; i < 6; i++) {
//         draw2ndObstacleFunc(list2ndObstacle[i]);
//     }
// }function draw3rdObstacleFunc(obj){
//     context.fillStyle = 'rgb(0,255,0)';
//     context.beginPath();
//     context.fillRect(obj.x, obj.y, obj.lengthh, obj.height);
//     context.stroke();
// }
// function draw3rdObstacle() {
//     for (let i = 0; i < 6; i++) {
//         draw3rdObstacleFunc(list3rdObstacle[i]);
//     }
// }