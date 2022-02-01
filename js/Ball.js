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

    checkBallMetBar(){
        if((this.y+this.r)>=bar.y&&this.x>=bar.x+bar.length/3&&this.x<=(bar.x+2*bar.length/3)){
            //bóng chạm giữa bar
            // this.y=context.canvas.height-this.r-29;
            this.direction =2*Math.PI-this.direction;
            return 1;
        }
        if((this.y+this.r)>=bar.y&&this.x>=bar.x&&this.x<(bar.x+bar.length/3)){
            //bóng chạm mé trái bar
            // this.y=context.canvas.height-this.r-29;
            this.direction =1.2*Math.PI;
            return 1;
        }
        if((this.y+this.r)>=bar.y&&this.x>bar.x+2*bar.length/3&&this.x<=(bar.x+bar.length)){
            //bóng chạm mé phải bar
            // this.y=context.canvas.height-this.r-29;
            this.direction =1.8*Math.PI;
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
let ball = new Ball(250,280,10);
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
    context.canvas.height=500;
    context.canvas.width=500;
    drawBorder();
   ball.x=250;
   ball.y=280;
   ball.r=10;
   ball.color=colorBall();
   ball.direction=1.55*Math.PI;
   ball.speed=2.7;
   drawBar();
   ball.drawBall();
   stopGame();

}