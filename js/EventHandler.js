import { DIRECTIONS,KEYCODES } from "./commonEnums.js";
export class EventHandler{
    constructor(board){
        document.addEventListener('keydown',(e)=>{
            if(e.code == KEYCODES.LEFT_ARROW_KEY){
                board.snake.changeDirection(DIRECTIONS.LEFT);
            }else if(e.code == KEYCODES.RIGHT_ARROW_KEY){
                board.snake.changeDirection(DIRECTIONS.RIGHT);
            }else if(e.code == KEYCODES.UP_ARROW_KEY) {
                board.snake.changeDirection(DIRECTIONS.UP);
            }else if(e.code == KEYCODES.DOWN_ARROW_KEY) {
                board.snake.changeDirection(DIRECTIONS.DOWN);
            }
            else if(e.code == 'KeyY'){
                board.snake.increaseLength();
            } 
            //console.log(e);
        },false)
    }
}