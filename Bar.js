let bar ={
    x:cWidth*0.5,
    y:cHeight-20,
    length:70,
    height:10,
    speed:40
}
function drawBar(){
    context.beginPath();
    context.rect(bar.x, bar.y, bar.length, bar.height);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
}
function moveSelection(x) {
    switch (x.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}