import { Snake } from "./Snake.js";
import { FoodController } from "./FoodController.js";
export class Board{
    constructor(width=300,height=300,parent=document.getElementsByTagName('body')[0]){
        this.width=width;
        this.height=height;
        this.parent=parent;
        this.cellWidth=9;
        this.createCanvas();
        this.snake=new Snake(this);
        this.foodController = new FoodController(this); 
        this.score=0;

        this.render();
    }

    createCanvas=()=> {
        const canvas=document.createElement("canvas");
        const ctx=canvas.getContext("2d");
        this.canvas=ctx;
        canvas.setAttribute("width",this.width);
        canvas.setAttribute("height",this.height);
        this.parent.appendChild(canvas);
    }

    render=()=>{
        this.canvas.clearRect(0,0,this.width,this.height);
        this.renderBoard();
        this.snake.render();
        window.requestAnimationFrame(this.render)
    }

    renderBoard=()=>{
        this.canvas.fillStyle="green";
        this.canvas.fillRect(0,0,this.width,this.height);
        // console.log("DS");
    }
};
