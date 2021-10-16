import { Board } from './Board.js';
import { EventHandler } from './EventHandler.js';

const board=new Board();
const evh=new EventHandler(board);
// document.addEventListener("load",init,false);