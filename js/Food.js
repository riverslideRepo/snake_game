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
        this.currentFoodColor = "rgb(255,0,255)";
        this.board.canvas.fillStyle = this.currentFoodColor;
        this.currentFoodBorderColor = "rgb(255,255,0)";
        this.board.canvas.strokeStyle=this.currentFoodBorderColor;

        this.board.canvas.beginPath();
        let cx = this.positionX * this.board.cellWidth + this.board.cellWidth/2;
        let cy = this.positionY * this.board.cellWidth + this.board.cellWidth/2;
        this.board.canvas.arc(cx, cy,this.board.cellWidth/2,0,2*Math.PI);
        this.board.canvas.closePath();
        this.board.canvas.fill();
        this.board.canvas.stroke();
        //this.board.canvas.fillRect(this.positionX * this.board.cellWidth,this.positionY * this.board.cellWidth,this.board.cellWidth,this.board.cellWidth);
        // console.log(this.positionY * this.board.cellWidth);
          
    }
}