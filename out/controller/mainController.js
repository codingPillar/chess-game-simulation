import { RESTART_BUTTON_ID, SQUARE_SIZE } from "../constants.js";
import { Vec2 } from "../model/vec2.js";
export class MainController {
    constructor(canvas, renderer, board) {
        this.canvas = canvas;
        this.renderer = renderer;
        this.board = board;
        this.addClickEvent();
        this.addRestartBtnEvent();
    }
    addClickEvent() {
        this.canvas.addEventListener('click', (event) => {
            const position = new Vec2(Math.floor(event.offsetX / SQUARE_SIZE), Math.floor(event.offsetY / SQUARE_SIZE));
            if (!this.board.moveSelectedPiece(position))
                this.board.select(position);
            this.renderer.draw();
        });
    }
    addRestartBtnEvent() {
        const btn = document.getElementById(RESTART_BUTTON_ID);
        btn.addEventListener('click', () => {
            this.board.reset();
            this.renderer.draw();
        });
    }
}
