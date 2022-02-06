let score = 0;
let subScore = 0;

function plusScore(){
    subScore+=levelGame*100;
}
function updateScore(){
    if(score<subScore){
        score=subScore;
    }
}
function showScoreInProcess(){
    let a = "Level: "+levelGame+"&nbsp;&nbsp; Score: "+ subScore;
    document.getElementById("score").innerHTML = a;
}
function showHighScore(){
    let a = "Level: "+levelGame+"&nbsp;&nbsp; Score: "+ subScore+ "&nbsp;&nbsp; HighScore: "+ score;
    document.getElementById("score").innerHTML = a;

}