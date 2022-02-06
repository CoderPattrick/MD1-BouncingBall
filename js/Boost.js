class Boost{
    constructor(name,img,x,y,width,height) {
        this.name=name;
        this.img=img;
        this.y=y;
        this.x=x;
        this.widthB=width;
        this.heightB=height;
        this.speed= 3;
    }
    drawBoost(){
        for (let i = 0; i < boosts.length; i++) {
            //need img source.
            let boostKind=boosts[i].name;
            let img = document.getElementById(boostKind);
            context.drawImage(img,boosts[i].x,boosts[i].y,boosts[i].widthB,boosts[i].heightB);
            this.updateBoostPosition();
        }
    }
    updateBoostPosition(){
        this.y+=this.speed;
        if(bar.y<=(this.y+this.heightB)&&this.y<(bar.y+bar.height)){
            //boost chạy đến tầm bar
            if(bar.x<=(this.x+this.widthB)<=(bar.x+bar.length+this.widthB)){
                //boost nằm trong phạm vi bar
                if(this.name=='moreBall') {
                    plusBall();
                    for (let i = 0; i < boosts.length; i++) {
                        if(boosts[i].x==this.x&&boosts[i].y==this.y){
                            boosts.splice(i,1);
                        }
                    }
                }
                else if(this.name=='fastBall'){
                    for (let i = 0; i < balls.length; i++) {
                        balls[i].speed+=0.5;
                    }
                    for (let i = 0; i < boosts.length; i++) {
                        if(boosts[i].x==this.x&&boosts[i].y==this.y){
                            boosts.splice(i,1);
                        }
                    }
                }
                else if(this.name=='bigBall'){
                    for (let i = 0; i < balls.length; i++) {
                        balls[i].r+=0.5;
                    }
                    for (let i = 0; i < boosts.length; i++) {
                        if(boosts[i].x==this.x&&boosts[i].y==this.y){
                            boosts.splice(i,1);
                        }
                    }
                }
            }
        }
        if(this.y+this.heightB>context.canvas.height){
            //xóa boost
            for (let i = 0; i < boosts.length; i++) {
                if(boosts[i].y+boosts[i].heightB>context.canvas.height){
                    boosts.splice(i,1);
                }
            }
            for (let i = 0; i < minusBoosts.length; i++) {
                if(minusBoosts[i].y+minusBoosts[i].heightB>context.canvas.height){
                    minusBoosts.splice(i,1);
                }
            }
        }
    }
}
class MinusBoost extends Boost{
    constructor(name,img,x,y,width,height) {
        super(name,img,x,y,width,height);
        this.speed=3.5;
    }
    drawMinusBoost(){
        for (let i = 0; i < minusBoosts.length; i++) {
            context.drawImage(minusBoosts[i].img);
            this.updateBoostPosition();
        }
    }
}
let boosts=[];
let minusBoosts=[];
// boosts.push(new Boost('fastBall','img/boostSpeed2.png',0,0,30,30));
// boosts.push(new Boost('fastBar','img/boostSpeed3.png',0,0,30,15));
// boosts.push(new Boost('longBar','img/longer1.png',0,0,30,12));
// boosts.push(new Boost('moreBall','img/plus1.png',0,0,30,30));
// boosts.push(new Boost('bigBall','img/boost1.png',0,0,30,30));
//
// minusBoosts.push(new MinusBoost('shortBar','img/shorter1.png',0,0,30,12));
// minusBoosts.push(new MinusBoost('slowBar','img/slow1.png',0,0,30,12));

function plusBall(){
    let randomIndex = Math.floor(balls.length*Math.random());
    let x= balls[randomIndex].x;
    let y= balls[randomIndex].y+2*balls[randomIndex].r;
    let r= balls[randomIndex].r;
    let direction = balls[randomIndex].direction;
    balls.push(new Ball(x,y,r));
    balls[balls.length-1].setBallDirection(direction);
}
function dropBoostMoreBall(x,y){
    boosts.push(new Boost('moreBall','',x,y,30,30));
    countBalls++;
}
function dropBoostFasterBall(x,y){
    boosts.push(new Boost('fastBall','',x,y,30,30));
}
function dropBoostBiggerBall(x,y){
    boosts.push(new Boost('bigBall','',x,y,30,30));
}
function randomAddBoost(x,y){
    let a = Math.random()*30;
    if(a<=2){
        dropBoostMoreBall(x,y);
        return 1;
    }
    if(a<=5){
        dropBoostFasterBall(x,y);
        return 1;
    }
    if(a<=7){
        dropBoostBiggerBall(x,y);
        return 1;
    }
    // if(a<=4){
    //     return 1;
    // }
    // if(a<=5){
    //     return 1;
    // }
    // if(a<=8){
    //     return 1;
    // }
    // if(a<=11){
    //     return 1;
    // }
    //
}

