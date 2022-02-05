class Obstacle{
    constructor(x,y,hp) {
        this.x=x;
        this.y=y;
        this.hp=hp;
        this.length = 70;
        this.height = 10;
    }
}
let list1stObstacle=[];
let list2ndObstacle=[];
let list3rdObstacle=[];

function create1st6obstacle(){
    list1stObstacle.push(new Obstacle(15,10,3))
    for (let i = 1; i < 6; i++) {
        let a = list1stObstacle[i-1].x+80;
        list1stObstacle.push(new Obstacle(a,10,3))
    }
}
function create2nd6obstacle(){
    list2ndObstacle.push(new Obstacle(15,40,2))
    for (let i = 1; i < 6; i++) {
        let a = list2ndObstacle[i-1].x+80;
        list2ndObstacle.push(new Obstacle(a,40,2))
    }
}
function create3rd6obstacle(){
    list3rdObstacle.push(new Obstacle(15,70,1))
    for (let i = 1; i < 6; i++) {
        let a = list3rdObstacle[i-1].x+80;
        list3rdObstacle.push(new Obstacle(a,70,1))
    }
}
create1st6obstacle();
create2nd6obstacle();
create3rd6obstacle();
let listObstacle=[];
listObstacle.push(list1stObstacle);
listObstacle.push(list2ndObstacle);
listObstacle.push(list3rdObstacle);
function draw1stObstacleFunc(obj){
    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.fillRect(obj.x, obj.y, obj.length, obj.height);
    context.stroke();
}
function draw1stObstacle() {
    for (let i = 0; i < 6; i++) {
        draw1stObstacleFunc(list1stObstacle[i]);
    }
}function draw2ndObstacleFunc(obj){
    context.fillStyle = 'rgb(0,0,255)';
    context.beginPath();
    context.fillRect(obj.x, obj.y, obj.length, obj.height);
    context.stroke();
}
function draw2ndObstacle() {
    for (let i = 0; i < 6; i++) {
        draw2ndObstacleFunc(list2ndObstacle[i]);
    }
}function draw3rdObstacleFunc(obj){
    context.fillStyle = 'rgb(0,255,0)';
    context.beginPath();
    context.fillRect(obj.x, obj.y, obj.length, obj.height);
    context.stroke();
}
function draw3rdObstacle() {
    for (let i = 0; i < 6; i++) {
        draw3rdObstacleFunc(list3rdObstacle[i]);
    }
}