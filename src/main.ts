import { CANVAS_HEIGHT, CANVAS_ID, CANVAS_WIDTH } from "./constants.js";
import { MainController } from "./controller/mainController.js";
import { Board } from "./model/board.js";
import { MainRenderer } from "./view/mainRenderer.js";

console.log("WELCOME");

function main(){
    const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.setAttribute('width', CANVAS_WIDTH.toString());
    canvas.setAttribute('height', CANVAS_HEIGHT.toString());

    const board: Board = new Board();
    const renderer: MainRenderer = new MainRenderer(context, board);
    const controller: MainController = new MainController(canvas, renderer, board);
    
    renderer.draw();
}

main();