import { DIRECTIONS } from './commonEnums.js';
export class SnakeUnit{

    constructor(board,positionX=0,positionY=0,direction=DIRECTIONS.RIGHT,color) {
        this.board=board;
        this.positionX=positionX;
        this.positionY = positionY;
        this.direction=DIRECTIONS.RIGHT;
        this.color=color;

        // if(!color){
        //     let r=Math.random()*255;
        //     let g=Math.random()*255;
        //     let b=Math.random()*255;
    
        //     this.color=`rgb(${r},${g},${b})`;
        // }
       
    }

    render=()=>{
        this.board.canvas.fillStyle="white";
        this.board.canvas.fillRect(this.positionX,this.positionY,this.board.cellWidth,this.board.cellWidth);
        
    }

    move=()=>{
        // console.log(this.direction);
        if(this.direction == DIRECTIONS.UP){
            this.moveUp();
        }else if(this.direction == DIRECTIONS.DOWN){
            this.moveDown();
        }else if(this.direction == DIRECTIONS.LEFT){
            this.moveLeft();
        }else if(this.direction == DIRECTIONS.RIGHT){
            this.moveRight();
        }
    }

    moveUp=()=>{
        this.positionY = this.positionY - this.board.cellWidth;
        // this.positionY--;
    }
    moveDown=()=>{
        this.positionY = this.positionY + this.board.cellWidth;
        // this.positionY++;
    }
    moveLeft=()=>{
        this.positionX = this.positionX - this.board.cellWidth;
        // this.positionX--;
    }
    moveRight=()=>{
        this.positionX = this.positionX + this.board.cellWidth;
        // this.positionX++;
    }

}