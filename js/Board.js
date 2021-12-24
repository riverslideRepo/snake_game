import { Snake } from "./Snake.js";
import { FoodController } from "./FoodController.js";
import { ObstacleController, ObstacleImagePath, ObstacleImages, ObstacleMaps } from "./ObstacleController.js";

export class Board{
    constructor(width=30,height=30,parent=document.getElementsByTagName('body')[0]){
        this.width=width;
        this.height=height;
        this.parent=parent;
        this.cellWidth=10;
        this.createCanvas();

        let obstacleData = ObstacleMaps.BOX;
        let obstacleImg = ObstacleImagePath + "/" + ObstacleImages.redBrick;
        
        this.obstacleController = new ObstacleController(this,obstacleImg,obstacleData.obstacles);
        this.snake=new Snake(this,obstacleData.snakeInitPosition);
        this.foodController = new FoodController(this); 

        

        this.score=0;

        this.render();
    }

    createCanvas=()=> {
        const canvas=document.createElement("canvas");
        const ctx=canvas.getContext("2d");
        this.canvas=ctx;
        canvas.setAttribute("width",this.width * this.cellWidth);
        canvas.setAttribute("height",this.height * this.cellWidth);
        this.parent.appendChild(canvas);
    }

    gameOver=()=>{
        this.snake.pause();
        console.log("Game Over");
    }

    render=()=>{

        this.canvas.clearRect(0,0,this.width * this.cellWidth,this.height * this.cellWidth);
        this.renderBoard();
        this.obstacleController.render();
        this.foodController.render();
        this.snake.render();
        window.requestAnimationFrame(this.render)
    }

    renderBoard=()=>{
        this.canvas.fillStyle="green";

        this.canvas.fillRect(0,0,this.width * this.cellWidth,this.height * this.cellWidth);
        // console.log("DS");

        for(let i=0; i<this.width; i++){
            for(let j=0; j<this.height; j++){
                this.canvas.strokeStyle="gray";
                this.canvas.strokeRect(i * this.cellWidth, j * this.cellWidth, this.cellWidth, this.cellWidth);
    
            }
        }
    }
};
