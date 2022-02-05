import { DIRECTIONS,KEYCODES,PLAY_STATE } from "./commonEnums.js";

function playPauseHandler(board){
    if(board.playState == PLAY_STATE.OVER)
        return;

    if(board.playState == PLAY_STATE.PAUSED){
        document.getElementById("play_btn").innerHTML="Resume";
        board.pauseGame();
    }else{
        document.documentElement.requestFullscreen();  ///full sceen
        document.getElementById("play_btn").innerHTML="Pause";
        board.resumeGame();
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

export class EventHandler{
    constructor(board){
        document.addEventListener('keydown',(e)=>{

            /////////Keyboard events///////////
            if(e.code == KEYCODES.LEFT_ARROW_KEY){
                board.snake.changeDirection(DIRECTIONS.LEFT);
            }else if(e.code == KEYCODES.RIGHT_ARROW_KEY){
                board.snake.changeDirection(DIRECTIONS.RIGHT);
            }else if(e.code == KEYCODES.UP_ARROW_KEY) {
                board.snake.changeDirection(DIRECTIONS.UP);
            }else if(e.code == KEYCODES.DOWN_ARROW_KEY) {
                board.snake.changeDirection(DIRECTIONS.DOWN);
            }else if(e.code == KEYCODES.SPACE_BAR) {
                playPauseHandler(board);
            }
            else if(e.code == 'KeyY'){
                board.snake.increaseLength();
            } 
            // console.log(e);
            
        },false);

        
        /////////////mouse events/////////
        document.getElementById("restart_btn").addEventListener("click",board.startGame,false);
        document.getElementById("play_btn").addEventListener("click",playPauseHandler.bind(null,board),false);
        


        ////////touch events//////////
        let touchStartX;
        let touchStartY;
        let touchEndX;
        let touchEndY;
        let touchDown = false;
        document.addEventListener('touchstart',(e)=>{
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        },false);

        document.addEventListener('touchmove',(e)=>{
           
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;

                let diffX = Math.abs(touchEndX - touchStartX);
                let diffY = Math.abs(touchEndY - touchStartY);

                if(touchEndY < touchStartY && diffX < 20 && diffY>20){
                    ///"Swipe Up";
                    board.snake.changeDirection(DIRECTIONS.UP);
                }
                if(touchEndY > touchStartY && diffX < 20 && diffY>20){
                    ////"Swipe down";
                    board.snake.changeDirection(DIRECTIONS.DOWN);
                }
                if(touchEndX < touchStartX && diffY < 20 && diffX>20){
                    ////"Swipe left";
                    board.snake.changeDirection(DIRECTIONS.LEFT);
                }
                if(touchEndX > touchStartX && diffY < 20 && diffX>20){
                   ////"Swipe right";
                   board.snake.changeDirection(DIRECTIONS.RIGHT);
                }
            
        },false);

    }
}

export const UIControls={
    showGameOver:(score)=>{
        let lower=document.getElementById("lower");
        lower.innerHTML="Game Over! Score "+score;
        lower.classList.add("active");
        document.getElementById("play_btn").style.visibility="hidden";
        document.getElementById("game_score").innerText = score;
    },
    startGame:()=>{
        let lower=document.getElementById("lower");
        lower.classList.remove("active");
        document.getElementById("play_btn").style.visibility="visible";
        document.getElementById("play_btn").innerHTML="Play";
        document.getElementById("game_score").innerText = "0";
    },
    showScore:(score)=>{
        document.getElementById("game_score").innerText = score;
    }
}
