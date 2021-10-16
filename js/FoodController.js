import { Food } from "./Food.js";
import { DIRECTIONS } from "./commonEnums.js";
export class FoodController{
    constructor(board){
        this.board=board;
        this.currentFood=null;
        this.generateFood();
    }

    checkFoodCollisions=()=>{
        let head=this.board.snake.snakeUnitsArr[0];
        let headCenterX = head.positionX + this.board.cellWidth/2;
        let headCenterY = head.positionY + this.board.cellWidth/2;
        let ifCollided = false;
        // if(this.board.snake.direction == DIRECTIONS.LEFT){
        //     if(headCenterX < this.currentFood.positionX && headCenterY > (this.currentFood.positionY - this.board.cellWidth/2) && headCenterY < (this.currentFood.positionY + this.board.cellWidth/2)){
        //         ifCollided = true;
        //     }

        // }else if(this.board.snake.direction == DIRECTIONS.RIGHT){
        //     if(headCenterX > this.currentFood.positionX && headCenterY > (this.currentFood.positionY - this.board.cellWidth/2) && headCenterY < (this.currentFood.positionY + this.board.cellWidth/2)){
        //         ifCollided = true;
        //     }
        // }else if(this.board.snake.direction == DIRECTIONS.UP){
        //     if(headCenterY < this.currentFood.positionY && headCenterX > (this.currentFood.positionX - this.board.cellWidth/2) && headCenterX < (this.currentFood.positionX + this.board.cellWidth/2)){
        //         ifCollided = true;
        //     }
        // }else if(this.board.snake.direction == DIRECTIONS.DOWN){
        //     if(headCenterY < this.currentFood.positionY && headCenterX > (this.currentFood.positionX - this.board.cellWidth/2) && headCenterX < (this.currentFood.positionX + this.board.cellWidth/2)){
        //         ifCollided = true;
        //     }
        // }

        // if(ifCollided == true){
        //     return true;
        // }
        // // console.log(headCenterX, headCenterY);
        if((headCenterX > this.currentFood.positionX-this.board.cellWidth/2)
         && (headCenterX < this.currentFood.positionX+this.board.cellWidth/2)
         && (headCenterY > this.currentFood.positionY-this.board.cellWidth/2)
         && (headCenterY < this.currentFood.positionY+this.board.cellWidth/2)){
            return true;
        }
    }
    generateFood=()=>{
        let xl=0+this.board.cellWidth;
        let xh=this.board.width-this.board.cellWidth;

        let yl=0+this.board.cellWidth;
        let yh=this.board.height-this.board.cellWidth;

        let posx = this.CenterElement(xl+Math.random()*(xh-xl) , this.board.cellWidth);
        let posy = this.CenterElement(yl+Math.random()*(yh-yl) , this.board.cellWidth);

        this.currentFood=new Food(this.board,posx,posy,this.board.cellWidth);
        
        
    }
    render=()=>{
        this.currentFood.render();
    }

    CenterElement=(num,cellWidth)=>{
        return Math.floor(num/cellWidth)*cellWidth+cellWidth/2;
    }
}