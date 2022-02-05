class Ball {
    constructor(x,y,r) {
        this.x=x;
        this.y=y;
        this.r=r;
        this.speed = 2.7;
        this.color = colorBall();
        this.direction = 1.55*Math.PI;
        //vector(hướng đi) của bóng, tính bằng góc (360=2PI)
    }
    setBallLocation(x){
        this.y=x;
}
    setBallDirection(x){
        this.direction=x;
    }
    checkBallMetBar(){
        // Physics Type:
        // if((this.y+this.r)>=bar.y&&this.x>=(bar.x+bar.length/3)&&this.x<=(bar.x+(2/3)*bar.length)){
        //     //bóng chạm giữa bar
        //     let a=this.direction;
        //     if(this.direction>0&&this.direction<=0.25*Math.PI){
        //         //bóng từ phía trái xiên 0<x<=0.25
        //         this.direction=1.5*Math.PI+a/2;
        //         return 1;
        //     }
        //     else if(this.direction>=0.75*Math.PI&&this.direction<Math.PI){
        //         //bóng từ phía phải xiên 0.75<=x<1
        //         this.direction=Math.PI+a/2;
        //         return 1;
        //     }
        //     else {
        //         //bóng từ phía trái hoặc phải gần vuông góc 0.25<x<0.75
        //         this.direction=1.75*Math.PI-a/2;
        //         return  1;
        //     }
        // }
        // if((this.y+this.r)>=bar.y&&this.x>=bar.x&&this.x<(bar.x+bar.length/3)){
        //     //bóng chạm mé trái bar
        //
        //     this.direction =1.2*Math.PI;
        //     return 1;
        // }
        // if((this.y+this.r)>=bar.y&&this.x>(bar.x+(2/3)*bar.length)&&this.x<=(bar.x+bar.length)){
        //     //bóng chạm mé phải bar
        //
        //     this.direction =1.8*Math.PI;
        //     return 1;
        // }
        //User Control Type: 7 field.
if((this.y+this.r)>=bar.y&&this.x>=bar.x&&this.x<(bar.x+bar.length/7)){
    this.setBallDirection(1.125*Math.PI);
    return 1;
}
if((this.y+this.r)>=bar.y&&this.x>=(bar.x+bar.length/7)&&this.x<(bar.x+2*bar.length/7)){
    this.setBallDirection(1.25*Math.PI);
    return 1;
}
if((this.y+this.r)>=bar.y&&this.x>=(bar.x+2*bar.length/7)&&this.x<(bar.x+3*bar.length/7)){
    this.setBallDirection(1.375*Math.PI);
    return 1;
}
if((this.y+this.r)>=bar.y&&this.x>=(bar.x+3*bar.length/7)&&this.x<(bar.x+4*bar.length/7)){
    this.setBallDirection(1.5*Math.PI);
    return 1;
}
if((this.y+this.r)>=bar.y&&this.x>=(bar.x+4*bar.length/7)&&this.x<(bar.x+5*bar.length/7)){
    this.setBallDirection(1.625*Math.PI);
    return 1;
}
if((this.y+this.r)>=bar.y&&this.x>=(bar.x+5*bar.length/7)&&this.x<(bar.x+6*bar.length/7)){
    this.setBallDirection(1.75*Math.PI);
    return 1;
}
if((this.y+this.r)>=bar.y&&this.x>=(bar.x+6*bar.length/7)&&this.x<=(bar.x+bar.length)){
    this.setBallDirection(1.875*Math.PI);
    return 1;
}
    }
    drawBall(){
        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        context.fill();
        this.updatePosition();
    }
    drawBallStart(){
        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        context.fill();
    }
    updatePosition(){
        this.x+=Math.cos(this.direction)*this.speed;
        this.y+=Math.sin(this.direction)*this.speed;
        if(this.x-this.r<0){
            //bóng chạm viền trái
            this.x=this.r;
            this.direction =3*Math.PI-this.direction;
        }
        else if(this.x+this.r>context.canvas.width){
            //bóng chạm viền phải
            this.x=context.canvas.width-this.r;
            this.direction =Math.PI-this.direction;
        }
        else if(this.y-this.r<0){
            //bóng chạm viền trên
            this.y=this.r;
            this.direction =2*Math.PI-this.direction;
        }
        else if(this.y+this.r>context.canvas.height){
            //bóng chạm viền dưới
            this.y=context.canvas.height-this.r;
            this.direction =2*Math.PI-this.direction;
        }
    }
}

let ball = new Ball(250,0,7);
let ballStartLocation = 0;
ballStartLocation = bar.y-ball.r;
ball.setBallLocation(ballStartLocation);
let checkRelease =false;
let ballDefaultSpeed =0;
function colorBall(){
    let r,g,b;
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return 'rgb('+r+','+g+','+b+')';
}


function restartGame(){
    stopGame();
   ball.x=250;
   ball.setBallLocation(ballStartLocation);
   ball.r=7;
   ball.color=colorBall();
   ball.direction=1.55*Math.PI;
   ball.speed=2.7;
   bar.x=230;
   bar.y=480;
   bar.length=60;
   bar.speed=3;
   checkRelease=false;
   checkMoveBall=0;
   checkMove=0;
   startGame();
}
