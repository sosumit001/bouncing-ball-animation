/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./src/scroller.js":
/*!*************************!*\
  !*** ./src/scroller.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroller);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle.js */ "./src/circle.js");
/* harmony import */ var _scroller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller.js */ "./src/scroller.js");


var canvas = document.getElementById("canvas");
var leftRightBtns = document.querySelectorAll('button');

var c = canvas.getContext("2d");



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

        let newCircle = new _circle_js__WEBPACK_IMPORTED_MODULE_0__["default"](x,y,radius,"rgb(255, 120, 80)",canvas);
        circles.push(newCircle);
    }

}


let scroller;
function createScroller(){
    scroller = new _scroller_js__WEBPACK_IMPORTED_MODULE_1__["default"](50,canvas.height - 20,200,20,"black",canvas);
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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map