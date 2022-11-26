class Circle {
    constructor(x, y, radius, color,canvas){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: Math.random() - 0.55,
            y: Math.random() - 1.35
        };
        this.canvas = canvas;
    }

    //methods....
    _distanceBtn(x1,x2,y1,y2){
        return Math.floor(Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2)));
    }
    moveUp(){
        this.velocity.y = -this.velocity.y;
    }
    update(c_another,circles,scroller){
        this.draw(c_another);

        circles.forEach(circle=>{
           
            let d1 = this._distanceBtn(circle.x,scroller.x,circle.y,scroller.y);
            let d2 = this._distanceBtn(circle.x,scroller.x+scroller.w,circle.y,scroller.y);
            let Dmin = 2*Math.sqrt(Math.pow(circle.radius,2)+Math.pow(scroller.w/2,2));
            if(d1 + d2 < Dmin)
            {
              circle.velocity.y = -circle.velocity.y;
            }
           
        })
        for(let i = 0; i < circles.length;i++)
        {
            
            if(this === circles[i]) continue;
            if(i > 0)
            {
                if(this._distanceBtn(this.x,circles[i].x,this.y,circles[i].y) - 2*this.radius < 0)
            {
                let exVx = circles[i].velocity.x;
                let exVy = circles[i].velocity.y;

                circles[i].velocity.x = this.velocity.x ;
                circles[i].velocity.y = this.velocity.y ;

                this.velocity.x = exVx;
                this.velocity.y = exVy;
            }
            }

            if(this.x > this.canvas.width - this.radius || this.x < this.radius)
            {
                this.velocity.x = -this.velocity.x;
            }
            if(this.y > this.canvas.height - this.radius|| this.y < this.radius) 
            {   
               this.velocity.y = - this.velocity.y;
            }
            this.x += this.velocity.x;
            this.y += this.velocity.y
        }
       
    }
    draw(c){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2,true);
        c.fill();
        c.closePath();
    }

}

export default Circle;