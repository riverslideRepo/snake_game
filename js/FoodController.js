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

        let ok=false;
        let posx,posy;

        do{
            posx = Math.floor(Math.random()*this.board.width);
            posy = Math.floor(Math.random()*this.board.height);

            ////check for bodyfall
            const snakeUnits = this.board.snake.snakeUnitsArr;
            let flag = false;

            for(let i=0; i<snakeUnits.length; i++){
                if(snakeUnits[i].positionX == posx && snakeUnits[i].positionY == posy){
                    flag=true;
                    break;
                }
            }
            //check for obstacle
            const obstacles = this.board.obstacleController.map;
            // console.log(obstacles)
            for(let i=0; i<obstacles.length; i++){
                if(obstacles[i][0] == posx && obstacles[i][1] == posy){
                    flag = true;
                    break;
                }
            }

            if(flag === true){
                ok=false;
            }else{
                ok=true;
            }
            

        }while(ok === false); 

        this.currentFood=new Food(this.board,posx,posy,this.board.cellWidth);
        
        
    }
    render=()=>{
        this.currentFood.render();
    }

    CenterElement=(num,cellWidth)=>{
        return Math.floor(num/cellWidth)*cellWidth+cellWidth/2;
    }
}