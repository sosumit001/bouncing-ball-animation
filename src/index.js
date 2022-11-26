import Circle from "./circle.js";

var canvas = document.getElementById("canvas");
var leftRightBtns = document.querySelectorAll('button');

var c = canvas.getContext("2d");

import Scroller from "./scroller.js";

function  _distanceBtn(x1,x2,y1,y2){
    return (Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2)));
}


let circles;
function createCircles(){
    circles = [];
   
    for(let i = 0; i< 3; i++)
    {
        let radius = 20;
        let x = Math.random()*(canvas.width - 2*radius) + radius;
        let y = Math.random()*(canvas.height - 2*radius) + radius;
       
        if(i != 0)
        {
            for(let j = 0;j<circles.length;j++)
            {
                if(_distanceBtn(x,circles[j].x,y,circles[j].y) - 2*radius < 6)
                {
                     x = Math.random()*(canvas.width - 2*radius) + radius;
                     y = Math.random()*(canvas.height - 2*radius) + radius;

                     j = -1;
                }
            }
        }

        let newCircle = new Circle(x,y,radius,"rgb(255, 120, 80)",canvas);
        circles.push(newCircle);
    }

}


let scroller;
function createScroller(){
    scroller = new Scroller(50,canvas.height - 20,200,20,"black",canvas);
    window.onkeydown = (e) => {
        let key = e.key;
    
        if(key === "ArrowRight")
        {
            scroller.moveRight();
        }
        if(key === "ArrowLeft")
        {
            scroller.moveLeft();
        }
    }
}


function moveOnBtnClick(){
    function moveBtn(type){
        if(type === "right")
        {
            scroller.moveRight();
        }
        if(type === "left")
        {
            scroller.moveLeft();
        }
    }
leftRightBtns.forEach(btn=>{
   let type = btn.innerHTML;
   btn.onclick = () => {
    moveBtn(type);
   }
})
}

function animate(){
    requestAnimationFrame(animate);
    setCanvasSize();
    moveOnBtnClick();
    c.clearRect(0,0,canvas.width,canvas.height)
    

    scroller.update(c);
    circles.forEach(circle=>{
        circle.update(c,circles,scroller);
    })
   
}

function setCanvasAttributes(w,h)
{
    canvas.removeAttribute("height");
        canvas.removeAttribute("width");
       
        canvas.setAttribute("width",w);
        canvas.setAttribute("height",h);
}
function setCanvasSize(){
   
    if(window.innerWidth < 600 && window.innerWidth > 500)
    {
        setCanvasAttributes(400,500);
    }
    else if(window.innerWidth < 500)
    {
        setCanvasAttributes(300,400)
    }
  
    else if(window.innerHeight < 600)
    {
        setCanvasAttributes((window.innerWidth/100)*50,(window.innerHeight/100)*80)
    }
    
    else {
        setCanvasAttributes(500,500)
    }
    
}


createScroller();
createCircles();
animate();
