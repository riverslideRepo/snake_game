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
        if((head.positionX == this.currentFood.positionX) && (head.positionY == this.currentFood.positionY)){
            return true;
        }
    }
    generateFood=()=>{
       
        let posx = Math.floor(Math.random()*this.board.width);
        let posy = Math.floor(Math.random()*this.board.height);

        this.currentFood=new Food(this.board,posx,posy,this.board.cellWidth);
        
        
    }
    render=()=>{
        this.currentFood.render();
    }

    CenterElement=(num,cellWidth)=>{
        return Math.floor(num/cellWidth)*cellWidth+cellWidth/2;
    }
}