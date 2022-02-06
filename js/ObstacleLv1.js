function create1st6obstacle(){
    list1stObstacle.push(new Obstacle(15,10,1));
    countNumbOfObstacle++;
    for (let i = 1; i < 6; i++) {
        let a = list1stObstacle[i-1].x+80;
        list1stObstacle.push(new Obstacle(a,10,1));
        countNumbOfObstacle++;
    }
}
function create2nd6obstacle(){
    list2ndObstacle.push(new Obstacle(15,60,2));
    countNumbOfObstacle++;
    for (let i = 1; i < 6; i++) {
        let a = list2ndObstacle[i-1].x+80;
        list2ndObstacle.push(new Obstacle(a,60,2));
        countNumbOfObstacle++;
    }
}
function create3rd6obstacle(){
    list3rdObstacle.push(new Obstacle(15,110,3));
    countNumbOfObstacle++;
    for (let i = 1; i < 6; i++) {
        let a = list3rdObstacle[i-1].x+80;
        list3rdObstacle.push(new Obstacle(a,110,3));
        countNumbOfObstacle++;
    }
}
setObstacle();
