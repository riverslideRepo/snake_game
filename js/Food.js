export class Food{
    constructor(board,positionX=0,positionY=0,width=5,){
        this.board=board;
        this.positionX=positionX;
        this.positionY=positionY;
        this.width=width;
    }
    render=()=>{
        // console.log(this)
        this.board.canvas.fillStyle="yellow";
        this.board.canvas.beginPath();
         this.board.canvas.arc(this.positionX,this.positionY,this.width/2,0,2*Math.PI,true);
         this.board.canvas.closePath();
        // this.board.canvas.fillRect(this.positionX,this.positionY,5,5);
         this.board.canvas.fill();
    }
}