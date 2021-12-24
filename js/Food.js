export class Food{
    constructor(board,positionX=0,positionY=0,width=5,){
        this.board=board;
        this.positionX=positionX;
        this.positionY=positionY;
        this.width=width;
        // console.log(positionX,positionY);
    }
    render=()=>{
        // console.log(this)
        this.board.canvas.fillStyle="yellow";
        // this.board.canvas.beginPath();
        //  this.board.canvas.fillRect(this.positionX * this.board.cellWidth, this.positionY * this.board.cellWidth,this.cellWidth,this.cellWidth);
        //  this.board.canvas.closePath();
        this.board.canvas.fillRect(this.positionX * this.board.cellWidth,this.positionY * this.board.cellWidth,this.board.cellWidth,this.board.cellWidth);
        // console.log(this.positionY * this.board.cellWidth);
        //  this.board.canvas.fill();
    }
}