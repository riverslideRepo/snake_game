import { DIRECTIONS } from "./commonEnums.js"; 
import { SnakeUnit } from "./SnakeUnit.js";

export class Snake{
    constructor(board) {
        this.length=1;  ///this is calculated as unit, not in pixel
        this.board=board;
        // this.cellWidth=this.board.cellWidth;
        // this.canvas=this.board.canvas;

        this.positionX=0;
        this.positionY=0;
        this.snakeSpeed = 300;
        this.direction=DIRECTIONS.RIGHT;  
        
        this.snakeUnitsArr=[new SnakeUnit(this.board,0,0),new SnakeUnit(this.board,-5,0),new SnakeUnit(this.board,-10,0)]; //for the first unt ::: ,new SnakeUnit(this.board,-5,0),new SnakeUnit(this.board,-10,0),new SnakeUnit(this.board,-15,0)

        this.timer=setInterval(this.move, this.snakeSpeed);

    }

    render=()=>{
        this.snakeUnitsArr.forEach((unit)=>{
            unit.render();
        })
        this.board.foodController.render();
    }

    move=()=>{
        // console.log('>'+this.direction);
        if(this.snakeUnitsArr.length>1){
            for(let i=this.snakeUnitsArr.length-1; i>=1; i--){
                this.snakeUnitsArr[i].direction=this.snakeUnitsArr[i-1].direction;
                this.snakeUnitsArr[i].positionX=this.snakeUnitsArr[i-1].positionX;
                this.snakeUnitsArr[i].positionY=this.snakeUnitsArr[i-1].positionY;
            }
        }
        this.snakeUnitsArr[0].direction=this.direction;
        this.snakeUnitsArr[0].move();
        // console.log(this.snakeUnitsArr);
        this.boundaryReposition();

        this.checkFood();
        
        this.checkSelfCollision();       

    }

    checkSelfCollision=()=>{
        let head=this.snakeUnitsArr[0];
        // let headCenterX = head.positionX + this.board.cellWidth/2;
        // let headCenterY = head.positionY + this.board.cellWidth/2;
        // let ifCollided = false;

        for(let i=1; i<this.snakeUnitsArr.length; i++) {
            let snakeUnit = this.snakeUnitsArr[i];

            // let calcX = snakeUnit.positionX + this.board.cellWidth/2;
            // let calcY = snakeUnit.positionY + this.board.cellWidth/2;

            // if((headCenterX > calcX-this.board.cellWidth/2)
            // && (headCenterX < calcX+this.board.cellWidth/2)
            // && (headCenterY > calcY-this.board.cellWidth/2)
            // && (headCenterY < calcY+this.board.cellWidth/2)){
            //     clearInterval(this.timer);
            //     console.log("Game over");
            // }

            if((head.positionX == snakeUnit.positionX) && (head.positionY == snakeUnit.positionY)){
                clearInterval(this.timer);
                console.log("Game over");
            }
        }
        
    }

    checkFood=()=>{
        if(this.board.foodController.checkFoodCollisions()){
            this.increaseLength();
            this.board.foodController.generateFood();
            this.board.score++;
            document.getElementById("counter").innerHTML=this.board.score;
        }
    }
    boundaryReposition=()=>{
        if((this.snakeUnitsArr[0].positionX + 1)>this.board.width && this.direction == DIRECTIONS.RIGHT){
            this.snakeUnitsArr[0].positionX=-1;
        }
        if(this.snakeUnitsArr[0].positionX < 0 && this.direction == DIRECTIONS.LEFT){
            this.snakeUnitsArr[0].positionX=this.board.width;
        }

        if((this.snakeUnitsArr[0].positionY + 1)>this.board.height && this.direction == DIRECTIONS.DOWN){
            this.snakeUnitsArr[0].positionY=-1;
        }
        if(this.snakeUnitsArr[0].positionY < 0 && this.direction == DIRECTIONS.UP){
            this.snakeUnitsArr[0].positionY=this.board.height;
        }
    }
    changeDirection(direction){
        // console.log(direction);
        // console.log(this.direction);
        if(this.direction == DIRECTIONS.UP){
            if(direction == DIRECTIONS.UP){
                ///speedup
            }else if(direction == DIRECTIONS.DOWN){
                ///speeddown
            }else if(direction == DIRECTIONS.LEFT){
                this.direction = DIRECTIONS.LEFT;
            }else if(direction == DIRECTIONS.RIGHT){
                this.direction = DIRECTIONS.RIGHT;
            }
        }else if(this.direction == DIRECTIONS.DOWN){
            if(direction == DIRECTIONS.UP){
                //slowdown
            }else if(direction == DIRECTIONS.DOWN){
                //sppedup
            }else if(direction == DIRECTIONS.LEFT){
                this.direction = DIRECTIONS.LEFT;
            }else if(direction == DIRECTIONS.RIGHT){
                this.direction = DIRECTIONS.RIGHT;
            }
        }else if(this.direction == DIRECTIONS.LEFT){
            if(direction == DIRECTIONS.UP){
                this.direction = DIRECTIONS.UP;
            }else if(direction == DIRECTIONS.DOWN){
                this.direction = DIRECTIONS.DOWN;
            }else if(direction == DIRECTIONS.LEFT){
                //sppedup
            }else if(direction == DIRECTIONS.RIGHT){
                //sppeddown
            }
        }else if(this.direction == DIRECTIONS.RIGHT){
            if(direction == DIRECTIONS.UP){
                this.direction = DIRECTIONS.UP;
            }else if(direction == DIRECTIONS.DOWN){
                this.direction = DIRECTIONS.DOWN;
            }else if(direction == DIRECTIONS.LEFT){
                //slowdown
            }else if(direction == DIRECTIONS.RIGHT){
                ///speedup
            }
        }

        this.checkFood();
    }

    increaseLength=()=>{
        let prevUnit=this.snakeUnitsArr[this.snakeUnitsArr.length-1];
        let px;
        let py;
        let dir=prevUnit.direction;
        if(prevUnit.direction == DIRECTIONS.LEFT){
            px = prevUnit.positionX + 1
            py = prevUnit.positionY;
        }else if(prevUnit.direction == DIRECTIONS.RIGHT){
            px = prevUnit.positionX - 1;
            py = prevUnit.positionY;
        }else if(prevUnit.direction == DIRECTIONS.UP){
            px=prevUnit.positionX;
            py=prevUnit.positionY + 1;
        }else if(prevUnit.direction == DIRECTIONS.DOWN){
            px=prevUnit.positionX;
            py=prevUnit.positionY - 1;
        }
 
        // console.log(px,py,prevUnit.positionX);

        this.snakeUnitsArr.push(new SnakeUnit(this.board,px,py,dir));

    }
}