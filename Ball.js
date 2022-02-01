class Ball {
    constructor(x,y,r) {
        this.x=x;
        this.y=y;
        this.r=r;
        this.speed = Math.random()*3+1;
        this.color = colorBall();
        this.direction = Math.random()*2*Math.PI;
        //vector(hướng đi) của bóng, tính bằng góc (360=2PI)
    }
    updatePosition(){
        this.x+=Math.cos(this.direction)*this.speed;
        this.y+=Math.sin(this.direction)*this.speed;
        if(this.x-this.r<0){
            //bóng chạm viền trái
            this.x=this.r;
            this.direction =3*Math.PI-this.direction;
        }
        else if(this.x+this.r>cWidth){
            //bóng chạm viền phải
            this.x=cWidth-this.r;
            this.direction =Math.PI-this.direction;
        }
        else if(this.y-this.r<0){
            //bóng chạm viền trên
            this.y=this.r;
            this.direction =2*Math.PI-this.direction;
        }
        else if(this.y+this.r>cHeight){
            //bóng chạm viền dưới
            this.y=cHeight-this.r;
            this.direction =2*Math.PI-this.direction;
        }
    }
}
function colorBall(){
    let r,g,b;
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return 'rgb('+r+','+g+','+b+')';
}
let ball = new Ball(100,100,10);