let score = 0;
let subScore = 0;
let level = 1
function plusScore(){
    subScore+=level*100;
}
function updateScore(){
    if(score<subScore){
        score=subScore;
    }
}
function showScoreInProcess(){
    let a = "Level: "+level+"&nbsp;&nbsp; Score: "+ subScore;
    document.getElementById("score").innerHTML = a;
}
function showHighScore(){
    let a = "Level: "+level+"&nbsp;&nbsp; Score: "+ subScore+ "&nbsp;&nbsp; HighScore: "+ score;
    document.getElementById("score").innerHTML = a;

}