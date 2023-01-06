import { CANVAS_HEIGHT, CANVAS_ID, CANVAS_WIDTH } from "./constants.js";
import { MainController } from "./controller/mainController.js";
import { Board } from "./model/board.js";
import { MainRenderer } from "./view/mainRenderer.js";
console.log("WELCOME");
function main() {
    const canvas = document.getElementById(CANVAS_ID);
    const context = canvas.getContext('2d');
    canvas.setAttribute('width', CANVAS_WIDTH.toString());
    canvas.setAttribute('height', CANVAS_HEIGHT.toString());
    const board = new Board();
    const renderer = new MainRenderer(context, board);
    const controller = new MainController(canvas, renderer, board);
    renderer.draw();
}
main();
