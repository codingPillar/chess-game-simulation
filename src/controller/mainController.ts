import { RESTART_BUTTON_ID, SQUARE_SIZE } from "../constants.js";
import { Board } from "../model/board.js";
import { Vec2 } from "../model/vec2.js";
import { MainRenderer } from "../view/mainRenderer.js";

export class MainController{
    private canvas: HTMLCanvasElement;
    private renderer: MainRenderer;
    private board: Board;

    constructor(canvas: HTMLCanvasElement, renderer: MainRenderer, board: Board){
        this.canvas = canvas;
        this.renderer = renderer;
        this.board = board;
        this.addClickEvent();
        this.addRestartBtnEvent();
    }

    private addClickEvent(): void{
        this.canvas.addEventListener('click', (event: MouseEvent) => {
            const position = new Vec2(Math.floor(event.offsetX / SQUARE_SIZE), Math.floor(event.offsetY / SQUARE_SIZE));
            if(!this.board.moveSelectedPiece(position)) this.board.select(position);
            this.renderer.draw();
        });
    }

    private addRestartBtnEvent(): void {
        const btn = document.getElementById(RESTART_BUTTON_ID) as HTMLButtonElement;
        btn.addEventListener('click', () => {
            this.board.reset();
            this.renderer.draw();
        });
    }
}