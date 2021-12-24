import { DIRECTIONS,KEYCODES,PLAY_STATE } from "./commonEnums.js";
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
            
        },false);

        

        document.getElementById("restart_btn").addEventListener("click",board.startGame,false);
        document.getElementById("play_btn").addEventListener("click",()=>{
            if(board.playState == PLAY_STATE.PAUSED){
                document.getElementById("play_btn").innerHTML="Resume";
                board.pauseGame();
            }else{
                document.getElementById("play_btn").innerHTML="Pause";
                board.resumeGame();
            }
        },false);
        
    }
}

export const UIControls={
    showGameOver:(score)=>{
        let lower=document.getElementById("lower");
        lower.innerHTML="Game Over! Score "+score;
        lower.classList.add("active");
    },
    startGame:()=>{
        let lower=document.getElementById("lower");
        lower.classList.remove("active");
    },
    showScore:(score)=>{
        document.getElementById("game_score").innerText = score;
    }
}
