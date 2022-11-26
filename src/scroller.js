class Scroller {
    constructor(x,y,w,h,c,canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.canvas = canvas;
    }

    moveLeft(){
        if(this.x > 0)
        {
            this.x = this.x -10; 
        }
    }
    moveRight(){
        if(this.x + this.w< this.canvas.width)
        {
            this.x = this.x + 10;
        }
    }
    update(c) {
        this.draw(c);
    }
    draw(c){
        c.fillStyle = this.c;
        c.fillRect(this.x,this.y,this.w,this.h);
    }
}

export default Scroller;