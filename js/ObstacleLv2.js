function setObstacleLv2() {
    create1st6obstacleLv2();
    create2nd6obstacleLv2();
    create3rd6obstacleLv2();
    listObstacle.push(list1stObstacle);
    listObstacle.push(list2ndObstacle);
    listObstacle.push(list3rdObstacle);
}
function create1st6obstacleLv2(){
    list1stObstacle.push(new Obstacle(15,10,2));
    countNumbOfObstacle++;
    for (let i = 1; i < 6; i++) {
        let a = list1stObstacle[i-1].x+80;
        list1stObstacle.push(new Obstacle(a,10,2));
        countNumbOfObstacle++;
    }
}
function create2nd6obstacleLv2(){
    list2ndObstacle.push(new Obstacle(15,60,3));
    countNumbOfObstacle++;
    for (let i = 1; i < 6; i++) {
        let a = list2ndObstacle[i-1].x+80;
        list2ndObstacle.push(new Obstacle(a,60,3));
        countNumbOfObstacle++;
    }
}
function create3rd6obstacleLv2(){
    list3rdObstacle.push(new Obstacle(15,110,4));
    countNumbOfObstacle++;
    for (let i = 1; i < 6; i++) {
        let a = list3rdObstacle[i-1].x+80;
        list3rdObstacle.push(new Obstacle(a,110,4));
        countNumbOfObstacle++;
    }
}
