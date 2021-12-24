import { Snake } from "./Snake.js";

export class ObstacleController{

    constructor(board,map=[]){
        this.board = board;
        this.map = map; 
               
    }

    checkForCollision(){
        let head = this.board.snake.snakeUnitsArr[0];
        for(let i=0; i<this.map.length; i++){
            if(head.positionX == this.map[i][0] && head.positionY == this.map[i][1]){
                return true;
            }
        }

        return false;
    }


    render=()=>{
        for(let i=0; i<this.map.length; i++){
            this.renderCell(this.map[i][0],this.map[i][1]);
        }
    }
    renderCell=(x=2,y=3)=>{
        this.board.canvas.fillStyle="maroon";
        this.board.canvas.fillRect(this.board.cellWidth * x, this.board.cellWidth * y, this.board.cellWidth, this.board.cellWidth);
        // this.board.canvas.drawImage(img, x * this.board.cellWidth, y * this.board.cellWidth, this.board.cellWidth, this.board.cellWidth);
    }

}

export const ObstacleMaps = {
    NO_OBSTACLES:{
        obstacles:[],
        snakeInitPosition:[[0,0],[0,-1],[0,-2]]
    },
    BOX:{
        obstacles:[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,17],[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[0,24],[0,25],[0,26],[0,27],[0,28],[0,29],[1,0],[1,29],[2,0],[2,29],[3,0],[3,29],[4,0],[4,29],[5,0],[5,29],[6,0],[6,29],[7,0],[7,29],[8,0],[8,29],[9,0],[9,29],[10,0],[10,29],[11,0],[11,29],[12,0],[12,29],[13,0],[13,29],[14,0],[14,29],[15,0],[15,29],[16,0],[16,29],[17,0],[17,29],[18,0],[18,29],[19,0],[19,29],[20,0],[20,29],[21,0],[21,29],[22,0],[22,29],[23,0],[23,29],[24,0],[24,29],[25,0],[25,29],[26,0],[26,29],[27,0],[27,29],[28,0],[28,29],[29,0],[29,1],[29,2],[29,3],[29,4],[29,5],[29,6],[29,7],[29,8],[29,9],[29,10],[29,11],[29,12],[29,13],[29,14],[29,15],[29,16],[29,17],[29,18],[29,19],[29,20],[29,21],[29,22],[29,23],[29,24],[29,25],[29,26],[29,27],[29,28],[29,29]],
        snakeInitPosition:[[3,1],[2,1],[1,1]]
    }    
}