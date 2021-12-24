import { Board } from './Board.js';
import { EventHandler } from './EventHandler.js';

const brd=document.getElementById("board");
const board=new Board(30,30,brd);
const evh=new EventHandler(board);
// document.addEventListener("load",init,false);
