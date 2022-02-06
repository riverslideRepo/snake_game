import { DIRECTIONS,KEYCODES,PLAY_STATE,SPEED_LEVElS } from "./commonEnums.js";
import { ObstacleMaps } from "./ObstacleController.js";

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

        ////speed level selector
        let speed_option_selector = document.getElementById("speed_option_selector");
        speed_option_selector.addEventListener("change",()=>{
            let level;
            switch(speed_option_selector.value){
                case "1":
                    level = SPEED_LEVElS.L1;
                    break;
                case "2":
                    level = SPEED_LEVElS.L2;
                    break;
                case "3":
                    level = SPEED_LEVElS.L3;
                    break;
                case "4":
                    level = SPEED_LEVElS.L4;
                    break;
                case "5":
                    level = SPEED_LEVElS.L5;
                    break;
                case "6":
                    level = SPEED_LEVElS.L6;
                    break;
                case "7":
                    level = SPEED_LEVElS.L7;
                    break;
                case "8":
                    level = SPEED_LEVElS.L8;
                    break;
            }

            board.changeSpeed(level);
        },false);

        ///obstacle map selector
        let obstacle_map_selector = document.getElementById("obstacle_map_selector");
        obstacle_map_selector.addEventListener("change",()=>{
            let map;
            switch(obstacle_map_selector.value){
                case "no_obstacle":
                    map = ObstacleMaps.NO_OBSTACLES;
                    break;
                case "horizontal":
                    map = ObstacleMaps.HORIZONTAL;
                    break;
                case "vertical":
                    map = ObstacleMaps.VERTICAL;
                    break;
                case "corner":
                    map = ObstacleMaps.CORNER;
                    break;
                case "horizontal_tunnel":
                    map = ObstacleMaps.HORIZONTAL_TUNNEL;
                    break;
                case "vertical_tunnel":
                    map = ObstacleMaps.VERTICAL_TUNNEL;
                    break;
                case "box":
                    map = ObstacleMaps.BOX;
                    break;
                case "dblHorizontal":
                    map = ObstacleMaps.DBL_HORIZONTAL;
                    break;
                case "dblVertical":
                    map = ObstacleMaps.DBL_VERTICAL;
                    break;
                case "dblCorner":
                    map = ObstacleMaps.DBL_CORNER;
                    break;
                case "CM28":
                    map = ObstacleMaps.CM28;
                    break;
                case "plus":
                    map = ObstacleMaps.PLUS;
                    break;
                case "dblPlus":
                    map = ObstacleMaps.DBL_PLUS;
                    break;
                case "cornerPlus":
                    map = ObstacleMaps.CORNER_PLUS;
                    break;
                case "cornerPlusDot":
                    map = ObstacleMaps.CORNER_PLUS_DOT;
                    break;
                case "CM32":
                    map = ObstacleMaps.CM32;
                    break;
                case "curveCorner":
                    map = ObstacleMaps.CURVE_CORNER;
                    break;
                case "curveCorner2":
                    map = ObstacleMaps.CURVE_CORNER2;
                    break;
                case "sideY":
                    map = ObstacleMaps.SIDE_Y;
                    break;
            }

            board.changeObstacleMap(map);
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
